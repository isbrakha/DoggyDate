const Owner = require("../models/owner");
const Dog = require("../models/dog");
const owner = require("../models/owner");

module.exports = {
  startSwiping,
  like,
  dislike,
}




async function startSwiping (req, res) {
  try {
    const userDog = await Dog.findById(req.params.dogId)
    const owner = await Owner.findById(req.params.ownerId)
    const otherDogs = await Dog.find({
      $and: [
        { _id: { $ne: userDog._id } },
        { _id: { $nin: userDog.likes } },
        { _id: { $nin: userDog.dislikes } }
      ]
    });
    const rndmInt = Math.floor(Math.random() * otherDogs.length)
    const otherDog = otherDogs[rndmInt]
    console.log('hey ther' + otherDogs)
    console.log(owner)
    res.render('swiping/swipe', {userDog: userDog, owner: owner, dog: otherDog});
  } catch (err) {
    console.log(err)
  }
} 

async function like (req, res) {
  try {
    const userDog = await Dog.findById(req.params.userDogId)
    const likedDog = await Dog.findById(req.params.likedDogId)

    await Dog.findByIdAndUpdate(userDog._id, {
      $push: { likes: likedDog._id }
    });

    // const otherDogLikes = likedDog.likes.includes(userDog._id);
    // const userDogLikes =  userDog.likes.includes(likedDog._id);

    // if(userDogLikes && otherDogLikes) {

    //   console.log('matched!');
    // } else {
    //   console.log('No match or issue with data.');
    // }

    const updatedLikedDog = await Dog.findById(likedDog._id)
    const mutualLike = updatedLikedDog.likes.includes(userDog._id)
    console.log(mutualLike + ' mutualLike')
    console.log(updatedLikedDog + " updated dog")

    if( mutualLike ) console.log('MATCHED!')


    res.redirect(`/owners/${req.params.ownerId}/dogs/${userDog._id}/swipe`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

async function dislike (req, res) {
  try {
    const userDog = await Dog.findById(req.params.userDogId)
    const dislikedDog = await Dog.findById(req.params.dislikedDogId)
    await Dog.findByIdAndUpdate(userDog._id, {
      $push: { dislikes: dislikedDog._id }
    });

    res.redirect(`/owners/${req.params.ownerId}/dogs/${userDog._id}/swipe`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};
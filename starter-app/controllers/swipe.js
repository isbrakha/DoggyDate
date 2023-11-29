const Owner = require("../models/owner");
const Dog = require("../models/dog");
const owner = require("../models/owner");

module.exports = {
  startSwiping,
  like,
  dislike,
}


// async function nextDog(dogId){
//   const currentDog = await Dog.findById(dogId);
//   if (!currentDog) {
//     console.log(`Dog with ID ${dogId} not found`);
//     return null;
//   }
//   const dogs = await Dog.find({
//     _id: {$ne: dogId},
//     _id: {$nin: currentDog.likes},
//     _id: {$nin: currentDog.dislikes},
//   });


//   const rndmInt = Math.floor(Math.random() * dogs.length)
//   return dogs[rndmInt];
// }

// async function like(req,res){
//   const dogId = req.session.swipingDogId;
//   const likedDogId = req.params.otherDogId;

//   try{
//     console.log('dogId = ' + dogId)
//     console.log('likedDogId = ' + likedDogId)
//     await Dog.findByIdAndUpdate(dogId, {$addToSet:{ likes: likedDogId }});
//     const owner = await Owner.findById(req.params.ownerId)
//     const likedDog = await Dog.findById(likedDogId);
//     if(likedDog.likes.includes(dogId)) {
//       // something ewhen match
//     }
//     const showNextDog = await nextDog(dogId);
//     if(nextDog){
//       res.redirect(`/owners/${owner._id}/dogs/${showNextDog._id}/swipe`)
//     } else{
//       res.redirect('no')
//     }

//   } catch (err){
//     console.log(err);
//     res.status(500)
//   }
// }

// async function dislike(req,res){
//   const dogId = req.session.swipingDogId;
//   const dislikedDogId = req.params.otherDogId;

//   try{
//     await Dog.findByIdAndUpdate(dogId, {$addToSet:{ dislikes: dislikedDogId }});
//     const nextDog = await nextDog(dogId);
//     if(nextDog){
//       res.redirect('/swipe/${nextDog._id');
//     } else{
//       res.redirect('no')
//     }

//   } catch (err){
//     console.log(err);
//     res.status(500)
//   }
// }

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
const Owner = require("../models/owner");
const Dog = require("../models/dog");
const owner = require("../models/owner");

module.exports = {
  startSwiping,
  nextDog,
  like,
  dislike,
}


async function nextDog(dogId){
  const currentDog = await Dog.findById(dogId);
  if (!currentDog) {
    console.log(`Dog with ID ${dogId} not found`);
    return null;
  }
  const dogs = await Dog.find({
    _id: {$ne: dogId},
    _id: {$nin: currentDog.likes},
    _id: {$nin: currentDog.dislikes},
  });



  return dogs[0];
}

async function like(req,res){
  const dogId = req.session.swipingDogId;
  const likedDogId = req.params.otherDogId;

  try{
    await Dog.findByIdAndUpdate(dogId, {$addToSet:{ likes: likedDogId }});
    const owner = await Owner.findById(req.params.ownerId)
    const ownerId = owner._id
    const likedDog = await Dog.findById(likedDogId);
    if(likedDog.likes.includes(dogId)) {
      //match is found
    }
    const showNextDog = await nextDog(dogId);
    if(nextDog){
      res.redirect(`/swipe/${showNextDog._id}`)
    } else{
      res.redirect('no')
    }

  } catch (err){
    console.log(err);
    res.status(500)
  }
}

async function dislike(req,res){
  const dogId = req.session.swipingDogId;
  const dislikedDogId = req.params.otherDogId;

  try{
    await Dog.findByIdAndUpdate(dogId, {$addToSet:{ dislikes: dislikedDogId }});
    const nextDog = await nextDog(dogId);
    if(nextDog){
      res.redirect('/swipe/${nextDog._id');
    } else{
      res.redirect('no')
    }

  } catch (err){
    console.log(err);
    res.status(500)
  }
}

async function startSwiping (req, res) {
    try {
      req.session.swipingDogId = req.params.dogId;
      const firstDog = await nextDog(req.session.swipingDogId)
      const owner = await Owner.findById(req.params.ownerId)
      console.log(owner)
      res.render('swiping/swipe', {dog: firstDog, owner: owner});
    } catch (err) {
      console.log(err)
    }
  };
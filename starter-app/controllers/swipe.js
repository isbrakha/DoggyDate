const Owner = require("../models/owner");
const Dog = require("../models/dog");

module.exports = {
  startSwiping,
  nextDog,
  like,
  dislike,
}


async function nextDog(dogId){

  const currentDog = await Dog.findById(dogId);
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

    const likedDog = await Dog.findById(likedDogId);
    if(likedDog.likes.includes(dogId)) {
      //match is found
    }
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

async function dislike(req,res){
  const dogId = req.session.swipingDogId;
  const dislikedDogId = req.params.otherDogId;

  try{
    await Dog.findByIdAndUpdate(dogId, {$addToSet:{ dislikes: dislikedDogId }});

    const likedDog = await Dog.findById(dislikedDogId);
    if(dislikedDog.likes.includes(dogId)) {
      //match is found
    }
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
     console.log('swipingDogId: ' + req.session.swipingDogId)
     console.log('dogId: ' + req.session.dogId)
      req.session.swipingDogId = req.params.dogId;
      res.render('swiping/swipe');
    } catch (err) {
      console.log(err);
    }
  };
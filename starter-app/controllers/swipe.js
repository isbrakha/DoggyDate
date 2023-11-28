const Owner = require("../models/owner");
const Dog = require("../models/dog");

module.exports = {
  startSwiping
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
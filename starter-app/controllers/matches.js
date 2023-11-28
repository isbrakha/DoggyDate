const Dog = require("../models/dog");
const Match = require("../models/match");

module.exports = {
    rejectMatch,
    acceptMatch,
    //matches,
    create,

};

const matches = [];
let currentProfileIndex = 0;

async function create(){}

async function displayOwner(dog){
    const dogProfile = dogprofiles[dog];
    console.log(dogProfile);
}

async function rejectMatch(){
    currentProfileIndex++;
    if (currentProfileIndex < dogProfile.length){
        displayOwner(currentProfileIndex);
    } else {
        console.log('no more dates/profiles');
    }
}

async function acceptMatch(){
    const currentProfile = dogprofiles[currentProfileIndex];
    const previousProfile = dogprofiles[currentProfileIndex - 1];

    if(previousProfile && previousProfile.accepted && currentProfile.accepted){
        //match happened
        matches.push({profile1: previousProfile, profile2: currentProfile});
    console.log('Matched!');
    } 
    currentProfile.accepted = true;
    currentProfileIndex++;

    if (currentProfileIndex < dogprofiles.length){
        displayOwner(currentProfileIndex)
    } else {
        console.log('no more profiles');
    }
}

displayOwner(currentProfileIndex);




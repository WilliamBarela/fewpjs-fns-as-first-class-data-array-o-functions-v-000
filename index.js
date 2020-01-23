var wakeDog = function(dogName, dogBreed){
  console.log(`Wake ${dogName} the ${dogBreed}`);
}

const leashDog = function(dogName, dogBreed){
  console.log(`Leash ${dogName} the ${dogBreed}`);
}

const walkToPark = function(dogName, dogBreed){
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
}

const throwFrisbee = function(dogName, dogBreed){
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
}

const walkHome = function(dogName, dogBreed){
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
}

const unleashDog = function(dogName, dogBreed){
  console.log(`Unleash ${dogName} the ${dogBreed}`);
}

let routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
]

function exerciseDog(dogName, dogBreed){
  for(let i = 0; i < routine.length; i++){
    routine[i](dogName, dogBreed);
  }
}
function wakeDog(dogName, dogBreed){
  let action = `Wake ${dogName} the ${dogBreed}`;
  console.log(action);
  return action
}

function leashDog(dogName, dogBreed){
  console.log(`Leash ${dogName} the ${dogBreed}`);
}

function walkToPark(dogName, dogBreed){
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
}

function throwFrisbee(dogName, dogBreed){
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
}

function walkHome(dogName, dogBreed){
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
}

function unleashDog(dogName, dogBreed){
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
  let exerciseRoutine = []
  for(let i = 0; i < routine.length; i++){
    exerciseRoutine.push(routine[i](dogName, dogBreed));
  }
  return exerciseRoutine
}
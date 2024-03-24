var fedCounter = 0;
function createDragon(dragonName, rider, temperment) {
  var dragon= {};
  dragon.name = dragonName;
  dragon.rider = rider;
  dragon.temperment = temperment;
  dragon.timesEaten = 0;
  dragon.hungry = true;
  return dragon;
}

function greetRider(name) {
  return `Hi, ${name['rider']}!`
}

function eat(dragon) {
  hungerCount = {
    timesEaten: 0,
    hungry: true,
  };
  fedCounter += 1;
  hungerCount['timesEaten'] = fedCounter;
  if (fedCounter >= 3) {
    hungerCount['hungry'] = false;
  }
  return hungerCount
}

function findFireBreathers(allDragons) {
  var fireBreathers = [];
  for (i = 0; i < allDragons.length; i++) {
    if (allDragons[i]['temperment'] === 'aggressive') {
      fireBreathers.push(allDragons[i])
    }
  }
  return fireBreathers;
}

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}
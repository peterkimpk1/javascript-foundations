function createVampire(name, pet) {
  vampire = {
    name: name,
    pet: 'bat',
    thirsty: true,
    ouncesDrank: 0
  }
  if (pet !== undefined) {
    vampire.pet = pet;
  }
  return vampire;
}
function drink(vampire) {
  if (vampire.ouncesDrank < 50) {
    vampire.ouncesDrank += 10;
  }
  if (vampire['ouncesDrank'] >= 50) {
    vampire['thirsty'] = false;
  }
  return vampire;
}
function encounterDeliciousVictim(vampire) {
  if(vampire['thirsty'] === true) {
    return `I WANT TO SUCK YOUR BLOOD!`
  }
  return `No thanks, I am too full.`
}

function inquirePlace(locations, location) {
  for (i = 0; i < locations.length; i++) {
    if (locations[i] === location) {
      return `Yes, I have spent some time in ${location}.`
    }
  }
  return `No, I have never been to ${location}.`
}

function findBatLovers(vampires) {
  batLovers = [];
  for (i = 0; i < vampires.length; i++) {
    if (vampires[i]['pet'] === 'bat') {
      batLovers.push(vampires[i]['name'])
    }
  }
  return batLovers;
}
module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}
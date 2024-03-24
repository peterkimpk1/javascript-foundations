
function createAirport(airportName, airlines, availableGates) {
  var createdAirport = {};
  createdAirport.name = airportName;
  createdAirport.availableGates = availableGates;
  createdAirport.airlines = airlines;
  return createdAirport;
}

function welcomeGuests(airport) {
  return `Welcome to ${airport['name']}!`
}





var updatedAirportGates = {};

function landPlanes(airport,gate) {
  var updatedAirportGates2 = {};
  if (airport['availableGates'] > gate) {
    var numberOfAvailableGates = airport['availableGates'] - gate
    updatedAirportGates.availableGates = numberOfAvailableGates;
    updatedAirportGates.message = `Success! Current availability is ${numberOfAvailableGates}.`
    return updatedAirportGates;
  }
  
  if (Object.keys(updatedAirportGates).length !== 0) {
    if (updatedAirportGates['availableGates'] < gate) {
      overflow = gate - updatedAirportGates['availableGates']
      updatedAirportGates2.availableGates = 0;
      updatedAirportGates2.message = `Oh no! Not enough gates available. Current overflow is ${overflow}.`
      return updatedAirportGates2;
    }
  }
}

function checkAirlineLocations() {
  
}
module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};

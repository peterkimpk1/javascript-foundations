function createElevator(name, floor, currentFloor, passengers) {
    var elevator = {
        building: name,
        floors: floor,
        currentFloor: currentFloor,
        passengers: passengers
    };
    return elevator;
}

function changeFloors(elevator, floor) {
    if (elevator.currentFloor !== floor) {
        if(floor > elevator.floors) {
            return `Floor ${floor} does not exist!`
        }
        else {
            elevator.currentFloor = floor;
            return `Taking you to floor ${floor}!`
        }
    }
    return `You\'re already on floor ${floor}!`    
}

function dropOffPassenger(elevator, passenger) {
    for (i = 0; i < elevator['passengers'].length; i++) {
        if (elevator['passengers'][i] === passenger) {
            elevator['passengers'].splice(i,1) //removes the index at i
        }
    }
    return elevator['passengers'];
}
module.exports = { 
    createElevator,
    changeFloors,
    dropOffPassenger
 };

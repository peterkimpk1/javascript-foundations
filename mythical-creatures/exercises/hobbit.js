function createHobbit(name, age) {
  var hobbit = {
    age: 0,
    name: 'unknown',
    isAdult: false,
    isOld: false,
    acquaintances: []
  };
  if (age !== undefined) {
    hobbit.age = age;
  }
  if (name !== undefined) {
    hobbit.name = name
  }
  return hobbit;
}

function celebrateBirthday(hobbit) {
  hobbit['age'] += 1
  if (hobbit['age'] >= 33) {
    hobbit['isAdult'] = true;
  }
  if (hobbit['age'] >= 101) {
    hobbit['isOld'] = true;
  }
  return hobbit;
}

function getRing(hobbit) {
  if (hobbit['name'] === 'Frodo') {
    return `Here is the ring!`
  }
  else {
    return `You can\'t have it!`
  }
}

function meetPeople(hobbit, people) {
  hobbit.name = hobbit.name;
  for (i = 0; i < people.length; i++) {
    hobbit.acquaintances.push(people[i])
  }
  return hobbit;
}

function findFriends(hobbits) {
  friends = [];
  for (i = 0; i < hobbits.acquaintances.length; i++) {
    if (hobbits.acquaintances[i]['relationship'] === 'friend') {
      friends.push(hobbits.acquaintances[i]['name'])
    }
  }
  return friends;
}

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  findFriends
}
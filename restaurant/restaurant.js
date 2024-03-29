function createMeal(name, specialRequests, tableNumber) {
  mealName = {
    name: name,
    specialRequests: specialRequests,
    tableNumber: tableNumber,
    complete: false
  };
  return mealName;
}

function getMade(mealName) {
  mealName.complete = true;
  return mealName;
}

function announceMeal(mealName) {
  if (mealName.complete === true) {
    return `Order up - ${mealName.name} for table ${mealName.tableNumber}!`
  }
  return `This ${mealName.name} is not completed yet`
}

function createOrder(orderInformation) {
  order = {
    tableNumber: orderInformation['name'],
    meals: orderInformation['meals'],
    completedMeals: []
  };
  return order;
}

// var meal1 = createMeal('Pico de Gallo Quesadillas', [], 3);
// var meal2 = createMeal('Sombra Shroom Griddled Tacos', ['crema'], 3);
// var meal3 = createMeal('The Situation Gordita', ['cilantro', 'onion'], 5);
// var meals = [meal1, meal2, meal3];
// var order = createOrder({ name: 3, meals: meals });

// console.log(order['tableNumber'])
function cookMeal(order, mealNumber) {
  if (order['tableNumber'] === mealNumber.tableNumber) { 
    for (i = 0; i < order['meals'].length; i++) {
      if (order['meals'][i]['name'] === mealNumber.name) {
        order['completedMeals'].push(order['meals'][i]['name'])
      }
    }
  }
  return order;
}



module.exports = { 
  createMeal, 
  getMade, 
  announceMeal,
  createOrder, 
  cookMeal, 
  // listOrders, 
  // listSpecialRequests
};

function createFavoriteFood(food) {
    dish = {};
    dish.name = food['dish'];
    dish.ingredients = food['ingredients'];
    dish.isSpicy = food['isSpicy'];
    dish.timesOrdered = 0;
    return dish;
}

function commentOnSpiciness(dish) {
    if (dish.isSpicy === true) {
        return `Wow, this ${dish['name']} is so spicy!`
    }
    return `Phew, this ${dish['name']} is not very spicy.`
}

function orderFood(dish) {
    dish['timesOrdered'] += 1
    return dish;
}

function createShoppingList(dishes) {
    list = [];
    for (i = 0; i < dishes.length; i++) {
        for(j = 0; j < dishes[i]['ingredients'].length; j++) {
            list.push(dishes[i]['ingredients'][j]);
        }
    }
    return list;
}

module.exports = { 
    createFavoriteFood,
    commentOnSpiciness,
    orderFood,
    createShoppingList
};
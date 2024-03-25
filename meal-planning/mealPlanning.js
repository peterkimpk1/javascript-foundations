function createMeal(mealType, calories) {
    meal = {
        dishes: [],
        type: mealType,
        calorieGoal: calories
    };
    return meal;
}

function addDish(meal, food) {
    var calorieAdjustment = 0;
    if (meal['calorieGoal'] > food['calories']) {
        meal['dishes'].push(food);
        calorieAdjustment = meal['calorieGoal'] - food['calories'];
        meal['calorieGoal'] = calorieAdjustment;
    }
    return meal;
}

function calculateCalories(meal) {
    totalCalories = 0;
    for (i = 0; i < meal.dishes.length; i++) {
        totalCalories += meal.dishes[i].calories;
    }
    return `${meal.type} has a total of ${totalCalories} calories.`
}

module.exports = {
    createMeal,
    addDish,
    calculateCalories
}
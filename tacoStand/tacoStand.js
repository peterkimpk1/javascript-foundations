function createIngredient(name, price) {
    var ingredients = {
        name: 'unknown',
        price: 0.00
    };
    if (name !== undefined) {
     ingredients.name = name;
    }
    if (price !== undefined) {
     ingredients.price = price;
    }
    return ingredients;
}

function createTaco(tacoName, ingredients) {
    taco = {
     name: 'custom',
     ingredients: []
    };
    if(tacoName !== undefined) {
     taco.name = tacoName;
    }
    if(ingredients !== undefined) {
      for (i = 0; i < ingredients.length; i++) {
        taco.ingredients.push(ingredients[i])
      }
    }
    return taco;
}

function addIngredientToTaco(tacoName, ingredient) {
    if (ingredient === undefined) {
        return tacoName;
    }
    tacoName.ingredients.push(ingredient);
    return tacoName;
}
function calculatePrice(tacoName) {
    totalPrice = 0;
    for (i = 0; i < tacoName.ingredients.length; i++) {
      totalPrice += tacoName.ingredients[i]['price']
    }
    return totalPrice;
}
module.exports = {
    createIngredient,
    createTaco,
    addIngredientToTaco,
    calculatePrice
}

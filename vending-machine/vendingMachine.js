function createItemStock(name, quantity, price) {
    itemStock = {
        name: 'unknown',
        quantity: 0,
        price: 1.00
    };
    if (name !== undefined && quantity !== undefined && price !== undefined) {
        itemStock['name'] = name;
        itemStock['quantity'] = quantity;
        itemStock['price'] = price;
    }
    return itemStock;
}

function makePurchase(item, balance) {
    if (item['price'] > balance) {
        return `Sorry, you need at least $${item['price']} to make that purchase`
    }
    else if (item['quantity'] === 0) {
        return `Sorry, there are none left`
    }
    return `Here are your ${item['name']}`;
}

function collectChange(change) {
    total = 0;
    for (i = 0; i < change.length; i++) {
        total += change[i];
    }
    return total;
}
module.exports = {
    createItemStock,
    makePurchase,
    collectChange
}

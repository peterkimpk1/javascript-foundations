function issueCard(name, age) {
    card = {
        name: name,
        age: age,
        numBooksCheckedOut: 0
    };
    if (age > 12) {
        card.isChild = false;
    }
    else if (age < 12) {
        card.isChild = true;
    }
    return card;
}

function searchByAuthor(collection, name) {
    searchResults = [];
    for (i = 0; i < collection.length; i++) {
        if (collection[i]['author'] === name) {
            searchResults.push(collection[i]);
        }
    }
    if (searchResults.length !== 0) {
        return searchResults;
    }
    return `No book found for search criteria`
}

module.exports = { 
    issueCard,
    searchByAuthor
};
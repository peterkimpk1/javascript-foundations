function createBarber(name, earnings, cuts) {
    barber = {
        name: name,
        earnings: 0,
        haircuts: [],
    };
    if (earnings !== undefined && cuts !== undefined) {
        barber.earnings = earnings;
        barber.haircuts = cuts;
    }
    return barber;
}

function giveCompliment(cut) {
    return `This ${cut['style']} looks great!`
}

function cutHair(barber, cut) {
    barber['haircuts'].push(cut);
    barber['earnings'] += cut['price'];
    return barber;
}

function listStyles(barber, hairLength) {
    knownStyles = [];
    for (i = 0; i < barber['haircuts'].length; i++) {
        if (barber['haircuts'][i]['hairLength'] === hairLength) {
            knownStyles.push(barber['haircuts'][i]['style']);
        }
    }
    return knownStyles;
}
module.exports = {
    createBarber,
    giveCompliment,
    cutHair,
    listStyles
  };
function createBirthday(name, month, day) {
    birthday = {};
    birthday.name = name;
    birthday.month = month;
    birthday.day = day;
    return birthday;
}

function celebrateBirthday(birthday) {
    return `Today is ${birthday['month']}/${birthday['day']}! Happy birthday, ${birthday['name']}!`
}

function countBirthdays(birthdays, month) {
    birthMonths = [];
    counter = 0;
    for (i = 0; i < birthdays.length; i++) {
        birthMonths.push(birthdays[i]['month'])
    }
    for (i = 0; i < birthMonths.length; i++) {
        if (birthMonths[i] === month) {
            counter += 1;
        }
    }
    return counter;
}

module.exports = {
    createBirthday,
    celebrateBirthday,
    countBirthdays
  };
function createEvent(title, month, day) {
    event = {
    title: title,
    month: month,
    day: day
    };
    if (day > 31 || day === 0) {
        return `Error: ${day} is not a valid day`
    }
    return event;
}

function createCalendar(name, events) {
    calendar = {};
    calendar.owner = name;
    calendar.events = [];
    for (i = 0; i < events.length; i++) {
        calendar.events.push(events[i])
    }
    return calendar;
}

function reportMonthlyEvents(calendar, month) {
    monthlyEvents = [];
    for (i = 0; i < calendar.events.length; i++) {
        if (calendar.events[i]['month'] === month) {
            monthlyEvents.push(calendar.events[i])
        }
    }
    return monthlyEvents;
}

module.exports = { 
    createEvent,
    createCalendar,
    reportMonthlyEvents
 };
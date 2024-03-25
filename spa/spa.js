function createCustomer(name, bill, bookings) {
  customer = {
    name: name,
    bill: bill,
    bookings: []
  };
  if (bookings !== undefined) {
    customer.bookings = bookings;
  }
  return customer;
}

function greeting(customer) {
  if (customer['bookings'].length !== 0) {
    return `${customer['name']}! Welcome back to Happy Spa`
  }
  return `${customer['name']}! Welcome to Happy Spa`
}

function createService(service, cost) {
  var services = {};
  if (service === undefined && cost === undefined) {
    return `Please provide service name and cost.`
  }
  services.name = service;
  services.cost = cost;
  return services;
}

function bookServices(name, service) {
  name.bookings.push(service['name']);
  name.bill += service['cost'];
  return name;
}

function applyGiftCard(services, cardAmount) {
  affordableServices = [];
  for (i = 0; i < services.length; i++) {
    if (services[i]['price'] <= cardAmount) {
      affordableServices.push(services[i]['name'])
    }
  }
  return affordableServices;
}
module.exports = {
  createCustomer,
  greeting,
  createService,
  bookServices, 
  applyGiftCard 
}

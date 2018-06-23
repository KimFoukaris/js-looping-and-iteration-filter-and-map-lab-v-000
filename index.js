function driversWithRevenueOver(drivers, revenue) {
  let result = drivers.filter(function(driver) {return driver.revenue > revenue;});
  return result
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let newDrivers = drivers.filter(function(driver) {return driver.revenue > revenue;});
  return result = newDrivers.map(function(newDriver) {return newDriver.name;});
}

function exactMatch(drivers, criteria) {
  return drivers.filter(function(obj) {
    return Object.keys(criteria).every(function(c) {
      return driver[c] == criteria[c];
    });
  });
}

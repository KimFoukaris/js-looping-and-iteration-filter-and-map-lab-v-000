function driversWithRevenueOver(drivers, revenue) {
  let result = drivers.filter(function(driver) {return driver.revenue > revenue;});
  return result
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let newDrivers = drivers.filter(function(driver) {return driver.revenue > revenue;});
  return result = newDrivers.map(function(newDriver) {return newDriver.name;});
}

function exactMatch(drivers, {a: b}) {
  const newDrivers = drivers.filter(function(driver) {return driver.a === b});
  console.log(newDrivers);
  return newDrivers;
}

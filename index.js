function findMatching (drivers, name) {
  return drivers.filter(function (driver) { return driver.toUpperCase() === name.toUpperCase()});
}

function fuzzyMatch (drivers, prefixPartName) {
  return drivers.filter(function (driver) { return driver.slice(0, prefixPartName.length) === prefixPartName});
}

function matchName (drivers, name) {
  return drivers.filter(function (driver) { return driver.name.toUpperCase() === name.toUpperCase()});
}

function findMatching(list, name) {
  return list.filter(function(driverName){
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list, partialName) {
  let lengthOfName = partialName.length
  return list.filter(function(driverName){
    return driverName.slice(0, lengthOfName).toLowerCase() === partialName.toLowerCase();
  });
}

function matchName(list, name) {
  return list.filter(function(driver){
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}

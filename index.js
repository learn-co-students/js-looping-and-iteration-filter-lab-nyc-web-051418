function findMatching(driversArray, stringArg ) {
  return driversArray.filter(driver => driver.toLowerCase() === stringArg.toLowerCase());
}

function fuzzyMatch(driversArray, stringQuery){
  const strQueryLength = stringQuery.length;
  return driversArray.filter(driver => driver.slice(0, strQueryLength) === stringQuery);
}

function matchName(driversArray, strQuery){
  return driversArray.filter(driver => driver.name.toLowerCase() === strQuery.toLowerCase());

}

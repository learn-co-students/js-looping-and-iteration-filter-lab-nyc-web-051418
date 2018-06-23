// Code your solution in this file

function findMatching (driversArray, string) {
    return driversArray.filter(function(driverName) { return driverName.toLowerCase() === string.toLowerCase()});
}

function fuzzyMatch (driversArray, string) {
    return driversArray.filter(function(driverName) {return (driverName.substring(0, string.length)) === string});
}

function matchName (driversArray, string) {
    return driversArray.filter(function(driver) { return driver.name.toLowerCase() === string.toLowerCase()});
}

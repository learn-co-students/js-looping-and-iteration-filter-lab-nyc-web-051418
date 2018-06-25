// Code your solution in this file
function findMatching(array, string) {

   return array.filter(function (element) { return element.toLowerCase() === string.toLowerCase(); });

}


function fuzzyMatch(array, string) {

   return array.filter(function (element) { return element.slice(0,string.length).toLowerCase() === string.toLowerCase(); });
}


function matchName(array, string) {

   return array.filter(function (element) { return element.name.toLowerCase() === string.toLowerCase(); });

}

// Code your solution in this file

function findMatching(drivers,name) {
  return drivers.filter(function(element){
    return element.toLowerCase()== name.toLowerCase()
  })
}


function fuzzyMatch(drivers,letter) {
return drivers.filter(function(element){
  return element.toLowerCase().indexOf(letter.toLowerCase()) == 0;
})
}


function matchName(drivers,string) {
  return drivers.filter(function(object){
    return object.name == string
  })
}

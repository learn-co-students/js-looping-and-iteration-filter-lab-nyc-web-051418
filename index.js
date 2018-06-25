// Code your solution in this file
function findMatching(list, string) {
  return list.filter(function (name) {
    return name.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch(list, string) {
  return list.filter (
    function(name) {
      return  string[0].toLowerCase().includes(name[0].toLowerCase());
    }
  )
};

function matchName(list, string) {
  return list.filter (
    function(object) {
      debugger;
      return  object['name'].toLowerCase() === string.toLowerCase();
    }
  )
};

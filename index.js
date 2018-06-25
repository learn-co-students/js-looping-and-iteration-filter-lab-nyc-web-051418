// Code your solution in this file
findMatching = (drivers,name) => {
  return drivers.filter(person => person.toLowerCase() === name.toLowerCase())
  // debugger
}

fuzzyMatch = (drivers,input) => {
  const filterInputs = drivers.filter(person => {
    if (person.slice(0,input.length) === input) {
      // debugger;
      return person; 
    }
  })
  return filterInputs; 
}

matchName = (drivers,personName) => {
  const nameMatch = drivers.filter(person => {
    if (person.name === personName) {
      return person; 
    }
  })
  // debugger
  return nameMatch; 
}
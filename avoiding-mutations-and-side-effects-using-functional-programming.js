// the global variable
var fixedValue = 4;

function incrementer (fixedValue) {
  return fixedValue + 1;
}

var newValue = incrementer();
console.log(newValue); // 5
console.log(fixedValue); // 4

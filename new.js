// Feature: calculate sum
function calculateSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Arguments must be numbers");
  }

  return a + b;
}


function getUserName() {
  return "Tom";
}

console.log(getUserName());
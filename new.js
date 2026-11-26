// Feature: calculate sum
function calculateSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Arguments must be numbers");
  }

  return a + b;
}

console.log(calculateSum(10, 20));
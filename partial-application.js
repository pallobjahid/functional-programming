const partialFunction = (a, b) => (c) => a + b + c;

const result = partialFuction(1, 3); // Partial application in one go
console.log(result(4));
console.log(result(8));

// mix of Immediate Computation and Partial Application
function immediatePartialFunction(a, b, c) {
  if (c !== undefined) {
    return a + b + c; // Immediate computation
  }
  return (c) => a + b + c; // Partial application
}

// Usage
const impResult = immediatePartialFunction(1, 3); // Partially applied function
console.log(impResult(4));
console.log(immediatePartialFunction(1, 3, 4)); // Immediate computation

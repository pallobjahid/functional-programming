const partialFuction = (a, b) => (c) => a + b + c;

const result = pause(1, 3); // Partial application in one go
console.log(result(4));
console.log(result(8));

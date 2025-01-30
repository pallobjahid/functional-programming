function multipleFunctionsAsArgs() {
  let offset = 0;
  const functions = Array.prototype.flat.call(
    Array.prototype.slice.call(arguments, offset),
    Infinity
  );

  console.log("Functions ->", functions);

  functions.forEach((fn) => fn());
}

function logMessage1() {
  console.log("Function 1 executed");
}

function logMessage2() {
  console.log("Function 2 executed");
}

// Calling the function
multipleFunctionsAsArgs(logMessage1, logMessage2);

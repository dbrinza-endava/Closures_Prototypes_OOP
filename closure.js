// Closure

const getMathModule = (x) =>({
      sum: (y) => x + y,
      substract: (y) => x - y,
      multiply: (y) => x * y,
      divide: (y) => x / y
  })
  
const math = getMathModule(5);

  console.log({
    sum: math.sum(6),
    substract: math.substract(6),
    multiply: math.multiply(6),
    divide: math.divide(6)
  })

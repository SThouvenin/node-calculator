const Calculator = require("./Calculator");

const calculator = new Calculator();

const num1 = 15;
const num2 = 4;

console.log("Sum of Numbers: ", calculator.add(num1, num2));
console.log("Difference of Numbers: ", calculator.subtract(num1, num2));
console.log("Product of Numbers: ", calculator.multiply(num1, num2));
console.log("Quotient of Numbers: ", calculator.divide(num1, num2));

const radius = 3.17;

console.log("Area of Circle: ", calculator.findAreaOfCircle(radius));

const side1 = 6;
const side2 = 23;
console.log(
  "Area of Rectangle: ",
  calculator.findAreaOfRectangle(side1, side2)
);

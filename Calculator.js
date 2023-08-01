// Write the class Calculator

class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    return num1 / num2;
  }

  findAreaOfCircle(radius) {
    return Math.PI * radius * radius;
  }

  findAreaOfRectangle(side1, side2) {
    return side1 * side2;
  }
}
// Export the Calculator Class

module.exports = Calculator;

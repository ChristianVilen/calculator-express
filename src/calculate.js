const calculate = (expression) => {
  if (!expression.operator) {
    return console.error("missing operator!")
  }

  let left = getTypeOf(expression.left)
  let right = getTypeOf(expression.right)

  switch (expression.operator) {
    case "+":
      return sum(left, right)
    case "-":
      return subtract(left, right)
    case "*":
      return multiply(left, right)
    case "/":
      return divide(left, right)
    default:
      console.error("invalid operator!")
  }
}

const getTypeOf = (expression) => typeof expression !== "number" ? calculate(expression) : expression
const sum = (input, input2) => input + input2
const subtract = (input, input2) => input - input2
const multiply = (input, input2) => input * input2
const divide = (input, input2) => input / input2

module.exports = calculate

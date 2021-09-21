function calculate(expression) {
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

console.log("1", calculate({left: {left: 5, right: 4, operator: "*"}, right: 4, operator: "+"}))
console.log("2", calculate({
  left: {left: 5, right: 4, operator: "*"},
  right: {left: 5, right: 4, operator: "-"},
  operator: "+"
}))
console.log("3", calculate({left: 12, right: 4, operator: "/"}))

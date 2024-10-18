// Create a function called calcDistance that calculates the distance between two unique elements
// Make sure to implement Stack principle (LIFO)

const Stack = require('../lib/Stack')

function calcDistance(a, b) {
  // your code here
  const tempStack = new Stack()
  let count = 0
  let countFlg = false

  while (!students.isEmpty()) {
    const item = students.pop();
    tempStack.push(item)

    if (countFlg) {
      if (item === a) {
        count++
        countFlg = false
      } else {
        count++
      }
    } else {
      if (item === b) {
        countFlg = true
      }
    }
  }

  while (!tempStack.isEmpty()) {
    students.push(tempStack.pop());
  }

  return count
}

const students = new Stack()
students.push("John")
students.push("Joe")
students.push("Jane")
students.push("Jill")
students.push("Jim")

const distance = calcDistance("Joe", "Jim")
console.log(distance) // 3
const distance2 = calcDistance("Joe", "Jill")
console.log(distance2) // 2

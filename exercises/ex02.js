// Create a function called removeBetween that removes all elements between two unique elements
// Make sure to implement the Stack principle (LIFO)

const Stack = require('../lib/Stack');

function removeBetween(a, b) {
  // your code here
  const tempStack = new Stack()
  let removeFlg = false

  while (!fruits.isEmpty()) {
    const item = fruits.pop();

    if (removeFlg) {
      if (item === a) {
        removeFlg = false
        tempStack.push(item)
      }
    } else {
      tempStack.push(item)
      if (item === b) {
        removeFlg = true
      }
    }
  }

  while (!tempStack.isEmpty()) {
    fruits.push(tempStack.pop());
  }
}

const fruits = new Stack();
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Cherry");
fruits.push("Date");
fruits.push("Elderberry");

removeBetween("Banana", "Elderberry");
console.log(fruits.printStack()); // Apple Banana Elderberry

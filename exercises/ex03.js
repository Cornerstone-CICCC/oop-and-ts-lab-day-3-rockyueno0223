// Create a function called insertAfterTarget that inserts a new element after a target element
// Make sure to implement the Stack principle (LIFO)

const Stack = require('../lib/Stack');

function insertAfterTarget(target, newElement) {
  // your code here
  const tempStack = new Stack()

  while (!stack.isEmpty()) {
    const item = stack.pop();

    if (item === target) {
      tempStack.push(newElement)
    }
    tempStack.push(item)
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
}

const stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");

insertAfterTarget("B", "X");
console.log(stack.printStack()); // A B X C D

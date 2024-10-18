// Create a function called isPalindrome that checks if the elements in the queue form a palindrome
// A palindrome reads the same forwards and backwards (e.g., 1 2 3 2 1)
// Make sure to implement the Queue principle (FIFO)

const Queue = require('../lib/Queue');

function isPalindrome(queue) {
  // your code here
  const tempQueue = new Queue()
  let tempArray = []

  while (!queue.isEmpty()) {
    const element = queue.dequeue()
    tempQueue.enqueue(element)
    tempArray.push(element)
  }

  while (!tempQueue.isEmpty()) {
    queue.enqueue(tempQueue.dequeue())
  }

  let start = 0
  let end = tempArray.length - 1

  while (start < end) {
    if (tempArray[start] !== tempArray[end]) {
      return false
    }
    start++
    end--
  }
  return true
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);

console.log(isPalindrome(queue)); // true

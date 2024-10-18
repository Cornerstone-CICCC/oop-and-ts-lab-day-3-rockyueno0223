// Create a function called mixQueue that rearranges the queue so that the first half is interleaved/mixed with the second half
// For example: 1 2 3 4 5 6 becomes 1 4 2 5 4 6
// Make sure to implement the Queue principle (FIFO)

const Queue = require('../lib/Queue');

function mixQueue(queue) {
  // your code here
  const tempQueue = new Queue()
  let middle = queue.size() / 2

  let firstHalfArr = []
  let secondHalfArr = []
  let count = 0
  while (!queue.isEmpty()) {
    const item = queue.dequeue()
    if (count < middle) {
      firstHalfArr.push(item)
    } else {
      secondHalfArr.push(item)
    }
    count++
  }

  let mixedArr = []
  for (let i = 0; i < middle; i++) {
    queue.enqueue(firstHalfArr[i])
    queue.enqueue(secondHalfArr[i])
  }
  return mixedArr
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

mixQueue(queue);
console.log(queue.printQueue()); // Output: 1 4 2 5 4 6

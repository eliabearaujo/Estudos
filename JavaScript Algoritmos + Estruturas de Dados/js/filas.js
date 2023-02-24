// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(item) {
//     this.items.push(item);
//   }

//   dequeue() {
//     return this.items.shift();
//   }

//   peek() {
//     return this.items[0];
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   size() {
//     //retorna o tamanho da fila
//     return this.items.length;
//   }

//   print() {
//     //Imprimir a fila no console.
//     return console.log(this.items.toString);
//   }
// }

// class PriorityQueue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(element, priority) {
//     var queueElement = { element: element, priority: priority };
//     var added = false;
//     for (var i = 0; i < this.items.length; i++) {
//       if (queueElement.priority < this.items[i].priority) {
//         this.items.splice(i, 0, queueElement);
//         added = true;
//         break;
//       }
//     }
//     if (!added) {
//       this.items.push(queueElement);
//     }
//   }

//   dequeue() {
//     return this.items.shift();
//   }

//   front() {
//     return this.items[0];
//   }

//   isEmpty() {
//     return this.items.length == 0;
//   }

//   size() {
//     return this.items.length;
//   }

//   print() {
//     console.log(this.items);
//   }
// }

// let pqueue = new PriorityQueue();

// pqueue.enqueue('Carlos', 2);
// pqueue.enqueue('Lucas', 1);
// pqueue.enqueue('Ana', 1);

// pqueue.print();

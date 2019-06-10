// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

//my version
// function circular(list) {
//   let beginning = list.getFirst();
//   let node = beginning.next;

//   while (node.next) {
//     if (node.next === beginning.next) {
//       return true;
//     }
//     node = node.next.next;
//   }
//   return false;
// }

function circular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

module.exports = circular;

//prompt create a function that takes a list in increasing order and delete any duplicates in the list
//solve in non recursive way
//if list is null, just return null

function Node(data) {
  this.data = data;
  this.next = null;
}

function removeDuplicates(head) {
  if (!head) return null;
  if (!head.next) return head;

  let current = head;
  let previous = new Node();

  while (current) {
    if (prev.data === current.data) previous.next = current.next;
    else previous = current;

    current = current.next;
  }

  return head;
}

// Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.
//Input: root = [5,3,6,2,4,null,7], k = 9
// Output: true

function findTarget(root, k) {
  let queue = [root];
  let map = {};
  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      const node = queue.shift();

      if (map[k - node.val]) {
        return true;
      } else {
        map[node.val] = 1;
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      }
    }
  }
  return false;
}

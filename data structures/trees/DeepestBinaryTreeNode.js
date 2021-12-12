//Find the Deepest Binary Tree Node

// Given a binary tree, write a function that will return the node in the tree with greatest depth. You may assume there is a unique deepest node. find the

function recursiveDFS(node, count) {
  let result;
  if (node.left !== null) {
    result = recursiveDFS(node.left, count + 1);
  }

  if (node.right !== null) {
    result = recursiveDFS(node.right, count + 1);
  }

  if (node.left === null && node.right === null) {
    return {
      count,
      node,
    };
  }

  return result;
}

function findDeepest(startingNode) {
  const { count: leftCount, node: leftDeepNode } = recursiveDFS(
    startingNode.left,
    2
  );
  const { count: rightCount, node: rightDeepNode } = recursiveDFS(
    startingNode.right,
    2
  );

  if (leftCount > rightCount) {
    return leftDeepNode;
  }

  return rightDeepNode;
}

function node(val) {
  return {
    val,
    left: null,
    right: null,
  };
}
let a = node('a');
let b = node('b');
let c = node('c');
let d = node('d');
let e = node('e');
let f = node('f');
let g = node('g');

a.left = b;
a.right = c;
b.right = d;
d.left = f;
c.left = e;
d.right = g;

console.log(findDeepest(a));

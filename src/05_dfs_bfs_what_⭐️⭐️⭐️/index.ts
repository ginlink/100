import { TreeNode } from '../utils';

/**
 * dfs recursion
 */
export function dfsRec(root: TreeNode | undefined | null): number[] {
  if (!root) {
    return [];
  }

  const res: number[] = [];
  recDfsRec(root);
  function recDfsRec(node: TreeNode | undefined | null) {
    if (!node) {
      return;
    }

    res.push(node.val);
    recDfsRec(node.left);
    recDfsRec(node.right);
  }

  return res;
}

/**
 * dfs loop
 * core: use stack to simulate recursion
 */
export function dfsLoop(root: TreeNode | undefined | null): number[] {
  const res: number[] = [];

  if (!root) {
    return res;
  }

  const stack: (TreeNode | undefined | null)[] = [];
  stack.push(root);
  while (stack.length > 0) {
    const item = stack.pop();

    if (item) {
      res.push(item.val);
      stack.push(item.right);
      stack.push(item.left);
    }
  }

  return res;
}

/**
 * bfs loop
 * core: use queue to simulate recursion
 */
export function bfsLoop(root: TreeNode | undefined | null): number[] {
  const res: number[] = [];

  if (!root) {
    return res;
  }

  const queue: (TreeNode | undefined | null)[] = [];
  queue.push(root);
  while (queue.length > 0) {
    const item = queue.shift();

    if (item) {
      res.push(item.val);
      queue.push(item.left);
      queue.push(item.right);
    }
  }

  return res;
}

import { bfsLoop, dfsLoop, dfsRec } from '.';
import { arr2tree } from '../utils';

describe('dfs and bfs', () => {
  it('dfs with recursion and loop', () => {
    expect(dfsRec(arr2tree([1, 2, 3, 4, 5]))).toEqual([1, 2, 4, 5, 3]);
    expect(dfsLoop(arr2tree([1, 2, 3, 4, 5]))).toEqual([1, 2, 4, 5, 3]);
  });
  it('bfs with loop', () => {
    expect(bfsLoop(arr2tree([1, 2, 3, 4, 5]))).toEqual([1, 2, 3, 4, 5]);
  });
});

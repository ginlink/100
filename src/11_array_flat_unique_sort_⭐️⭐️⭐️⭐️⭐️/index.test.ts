import { flatUniqueSort, flatUniqueSortCommon } from '.';

describe('array functions', () => {
  it('array functions', () => {
    const arr = [
      [1, 2, 2],
      [3, 4, 5, 5],
      [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
      10,
    ];

    expect(flatUniqueSortCommon(arr)).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
    ]);

    expect(flatUniqueSort(arr, 4)).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
    ]);
  });
});

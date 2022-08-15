/**
 * 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
 * https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/8
 */

const sort = (a: number, b: number) => a - b;

// 自己
export function flatUniqueSort(nums: any[], depth: number = 1) {
  const set = new Set();
  return nums
    .flat(depth)
    .filter(x => {
      if (set.has(x)) {
        return false;
      } else {
        set.add(x);
        return true;
      }
    })
    .sort(sort);
}

// 标准
export function flatUniqueSortCommon(nums: any[]) {
  return Array.from(new Set(nums.flat(Infinity))).sort(sort);
}

import { isTypeOf } from '../utils/type';

/**
 * 深拷贝-深度优先遍历，递归
 */
export function deepCloneDfsRec(origin: any, visited: any = []) {
  let res: any;

  if (isTypeOf(origin, 'array') || isTypeOf(origin, 'object')) {
    const existIndex = visited.indexOf(origin);
    res = isTypeOf(origin, 'array') ? [] : {};

    // if(~existIndex)
    if (existIndex > -1) {
      res = visited[existIndex];
    } else {
      visited.push(origin);
      for (const key in origin) {
        res[key] = deepCloneDfsRec(origin[key], visited);
      }
    }
  } else if (isTypeOf(origin, 'function')) {
    res = eval(`(${origin.toString()})`);
  } else {
    res = origin;
  }

  return res;
}

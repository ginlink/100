/**
 * 如何实现一个 new
 * https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/12
 */

export function myNew(fn: any, ...args: any[]) {
  // 1.创建一个对象，并正确指向prototype
  // 2.初始化实例属性
  // 3.正确指向constructor
  // 4.返回正确的对象

  const obj = Object.create(fn.prototype);
  obj.constructor = fn;

  const res = fn.apply(obj, args);
  return typeof res === 'object' ? res : obj;
}

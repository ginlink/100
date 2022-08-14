// 工具函数
const _toString = Object.prototype.toString;
const map = {
  array: 'Array',
  object: 'Object',
  function: 'Function',
  string: 'String',
  null: 'Null',
  undefined: 'Undefined',
  boolean: 'Boolean',
  number: 'Number',
};

type MapType = keyof typeof map;

export const getType = (item: any) => _toString.call(item).slice(8, -1);
export const isTypeOf = (item: any, type: MapType) => {
  return map[type] && map[type] === getType(item);
};

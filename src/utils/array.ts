// Create an array
export function createArr(num = 100) {
  const tmp = [];
  for (let i = 0; i < num; i++) {
    const item = Math.floor(Math.random() * 100);
    tmp.push(item);
  }

  return tmp;
}

// Exchange algorithm
export function swap(arr: any[], i: number, j: number) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

// Adaptation to deep copy
export function deep_clone(o: Record<string, any>) {
  return rec(o);

  function rec(o: { [key: string]: any }) {
    if (
      typeof o !== 'object' ||
      o === null ||
      o === undefined ||
      typeof o === 'function'
    ) {
      return o;
    }

    if (o instanceof Array) {
      const tmp: any[] = [];
      o.forEach(item => {
        tmp.push(rec(item));
      });

      return tmp;
    } else if (o instanceof Object) {
      if (o instanceof RegExp) {
        return o;
      } else {
        const obj: Record<string, any> = {};
        const keys = Object.keys(o);
        for (let i = 0; i < keys.length; i++) {
          obj[keys[i]] = rec((o as Record<string, any>)[keys[i]]);
        }
        return obj;
      }
    } else {
      return o;
    }
  }
}

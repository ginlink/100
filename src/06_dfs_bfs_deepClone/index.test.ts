import { deepCloneDfsRec } from '.';

describe('deep clone', () => {
  it('base type', () => {
    let origin: any = 'String';
    expect(deepCloneDfsRec(origin)).toBe(origin);

    origin = 123;
    expect(deepCloneDfsRec(origin)).toBe(origin);
  });

  it('advanced type', () => {
    let origin: any;
    let cloned: any;

    origin = [];
    cloned = deepCloneDfsRec(origin);
    expect(cloned).not.toBe(origin);
    expect(cloned).toEqual([]);

    origin = [1, 2, 3, 4, 5];
    cloned = deepCloneDfsRec(origin);
    expect(cloned).not.toBe(origin);
    expect(cloned).toEqual(origin);

    origin = {};
    cloned = deepCloneDfsRec(origin);
    expect(cloned).not.toBe(origin);
    expect(cloned).toEqual({});

    origin = { a: 1, b: 2 };
    cloned = deepCloneDfsRec(origin);
    expect(cloned).not.toBe(origin);
    expect(cloned).toEqual({ a: 1, b: 2 });

    function fn() {}

    origin = [{ a: 1, b: 2 }, fn];
    cloned = deepCloneDfsRec(origin);
    expect(cloned).not.toBe(origin);
    // expect(cloned).toEqual([{ a: 1, b: 2 }, fn]);
    // expect(JSON.stringify(cloned)).toMatchObject(
    //   JSON.stringify([{ a: 1, b: 2 }, fn])
    // );
  });

  it('circular reference', () => {
    let origin: any = {
      a: 1,
      // b: () => console.log(1),
      c: {
        d: 3,
        e: 4,
      },
      f: [1, 2],
      und: undefined,
      nul: null,
      origin: null,
    };
    origin.origin = origin;

    let cloned = deepCloneDfsRec(origin);
    expect(cloned).not.toBe(origin);

    const target: any = {
      a: 1,
      // b: () => console.log(1),
      c: {
        d: 3,
        e: 4,
      },
      f: [1, 2],
      und: undefined,
      nul: null,
      origin: null,
    };
    target.origin = target;

    expect(cloned.origin).toEqual(target);
  });
});

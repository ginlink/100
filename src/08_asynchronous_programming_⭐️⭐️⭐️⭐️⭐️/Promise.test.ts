import { MyPromise } from './Promise';

describe('promise then test', () => {
  it('should can call then method, resolve', async () => {
    const promise = new MyPromise(resolve => {
      resolve(123);
    });

    promise.then((res: any) => {
      expect(res).toBe(123);
    });
  });

  it('should can call then method, reject', async () => {
    const promise = new MyPromise((_resolve, reject) => {
      reject('reason');
    });

    promise.then(
      () => {},
      (err: any) => {
        expect(err).toBe('reason');
      }
    );
  });

  it('should can call then method many times', async () => {
    const promise = new MyPromise(resolve => {
      resolve(123);
    });

    promise.then((res: any) => {
      expect(res).toBe(123);
    });

    promise.then((res: any) => {
      expect(res).toBe(123);
    });
  });

  it('should not do anything, if no resolve or reject', async () => {
    const promise = new MyPromise(() => {});

    promise.then((res: any) => {
      expect(res).toBe(123);
    });

    promise.then((res: any) => {
      expect(res).toBe(123);
    });
  });

  it('should be called in chain', async () => {
    const promise = new MyPromise(resolve => {
      resolve(123);
    });

    promise
      .then((res: any) => {
        expect(res).toBe(123);

        return res;
      })
      .then((res: any) => {
        expect(res).toBe(123);
      });
  });

  it('should call in asynchronous resolve', () => {
    const promise = new MyPromise(resolve => {
      setTimeout(() => {
        resolve(123);
      }, 1000);
    });

    return promise
      .then((res: any) => {
        expect(res).toBe(123);

        return res;
      })
      .then((res: any) => {
        expect(res).toBe(123);
      });
  });
  it('should call in chain and asynchronous promise resolve1', () => {
    const promise = new MyPromise(resolve => {
      setTimeout(() => {
        resolve(123);
      }, 1000);
    });

    return promise
      .then((res: any) => {
        expect(res).toBe(123);

        return new MyPromise(re => {
          re(456);
        });
      })
      .then((res: any) => {
        expect(res).toBe(456);
      });
  });
  it('should call in chain and asynchronous promise resolve2', () => {
    const promise = new MyPromise(resolve => {
      setTimeout(() => {
        resolve(123);
      }, 1000);
    });

    return promise
      .then((res: any) => {
        expect(res).toBe(123);

        return new MyPromise(re => {
          setTimeout(() => {
            re(456);
          }, 1000);
        });
      })
      .then((res: any) => {
        expect(res).toBe(456);
      });
  });
  it('should call in chain and asynchronous resolve, but no result', () => {
    const promise = new MyPromise(resolve => {
      setTimeout(() => {
        resolve(123);
      }, 1000);
    });

    return promise
      .then((res: any) => {
        expect(res).toBe(123);
      })
      .then((res: any) => {
        expect(res).toBeUndefined();
      });
  });
  // it('should rejected by Circular reference', () => {
  //   const promise1 = new MyPromise((resolve) => {
  //     setTimeout(() => {
  //       resolve(123)
  //     }, 1000)
  //   })

  //   const promise2 = promise1.then((res) => {
  //     return promise1
  //   })

  //   return promise2
  //     .then((res) => {
  //       return promise2
  //     })
  //     .then(
  //       (res) => {
  //         expect(res).not.toBeCalled()
  //       },
  //       (err) => {
  //         expect(err).toBeCalled()
  //       }
  //     )
  // })
});

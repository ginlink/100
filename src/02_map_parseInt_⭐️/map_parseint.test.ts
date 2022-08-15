describe('map parseint', () => {
  it('should be ok', () => {
    expect(['1', '2', '3'].map(parseInt)).not.toEqual([1, 2, 3]);
    expect(['1', '2', '3'].map(parseInt)).toEqual([1, NaN, NaN]);
  });
});

// 1. parseInt('1', 0) //radix为0时，且string参数不以“0x”和“0”开头时，按照10为基数处理。这个时候返回1
// 2. parseInt('2', 1) //基数为1（1进制）表示的数中，最大值小于2，所以无法解析，返回NaN
// 3. parseInt('3', 2) //基数为2（2进制）表示的数中，最大值小于3，所以无法解析，返回NaN

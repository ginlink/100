// WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，
// 也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所
// 占用的内存，不考虑该对象还存在于 WeakSet 之中。

// [1] https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/6
// [2] https://es6.ruanyifeng.com/#docs/set-map

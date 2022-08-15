// 第 21 题：有以下 3 个判断数组的方法，请分别介绍它们之间的区别和优劣Object.prototype.toString.call() 、 instanceof 以及 Array.isArray()

// 1. Object.prototype.toString.call()
// 每一个继承 Object 的对象都有 toString 方法，如果 toString 方法没有重写的话，会返回 [Object type]，其中 type 为对象的类型。

// 2. instanceof
// instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。换句话说，用于检测实例是否是该构造函数的 prototype 的子类。

// 3. Array.isArray()
// ES5新增的方法，用来判断对象是否为数组。

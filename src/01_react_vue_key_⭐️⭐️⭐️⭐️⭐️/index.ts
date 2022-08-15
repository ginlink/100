// 写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？

// 结论：
//  1.使用key后强制组件更新数据，避免 `就地复用` 造成的副作用。
//  2.使用key后性能并不一定会提高，详见：https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/1#issue-401165995

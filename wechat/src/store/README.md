store 目录 下的4个文件
分别对应 vuex 的三个模块：

Actions(actions.js) => 客户端所有组件都通过 action 中完成对流入数据的处理(如异步请求、订阅、取消订阅等)
Mutations(另加types) => 然后通过 action 触发 mutation 修改 state (同步)。mutation(突变) 就是指数据的改变
State(index.js) => 最后由 state 经过 getter 分发给各组件


vuex 是整个 APP 的数据核心，相当于总管，所有“共用”数据的变动，都得通知它，且通过它来处理和分发， 保证了“单向数据流的特点”

为了拿到搜索结果，我们用 ajax 请求搜狗网站搜索，会用到 vue-resouce，当然，你用其他的 ajax 也没问题。

事件触发（action）-》突变（mutation）-》更新（state）-》读取（新state）
import { EventEmitter } from 'events';

export default new EventEmitter();
// 全局的事件管理
/**
 * 使用 addListener 创建自定义事件
 * 使用 emit触发自定义事件
 * 
 * 在一个组件中定义，在另一个组件中执行并且传递参数，那么在定义那个组件中就可以获取到传递的参数，达到通信的效果
 * 
 */
import React, { Component, PureComponent } from 'react';
import { is } from 'immutable'
// import PureRenderMixin from 'react-addons-pure-render-mixin';
import './input.css'
class Input extends Component {
    constructor(props) {
        super(props)
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this) 重写shouldComponentUpdate方法
        this.state = {}
    }
    shouldComponentUpdate(nextProps, nextState) {
        const thisProps = this.props || {},
            thisState = this.state || {};
        if (Object.keys(thisProps).length !== Object.keys(nextProps).length || Object.keys(thisState).length !== Object.keys(nextState).length) {
            //console.log('1')
            return true;
        }

        for (let key in nextProps) {
            if (thisProps[key] !== nextProps[key] || !is(thisProps[key], nextProps[key])) {
                return true;
            }
        }
        for (let key in nextState) {
            if (thisState[key] !== nextState[key] || !is(thisState[key], nextState[key])) {
                return true;
            }
        }

        return false;
    }
    render() {
        let {label = '', type = 'text', placeholder = ''} = this.props;
        //console.log(this.props)

        return (
            <p className='form-input'>
                {label ? <label>{label}</label> : ''}
                <input type={type} value={this.props.value} placeholder={placeholder} onChange={(e) => {
                this.props.change(e.target.value)
            }} />
            </p>
        )
    }
}
export default Input

/**
 * PureRender  
 * 
 * PureRenderMixin == PureComponent  实现的功能是一样的
 * 都是做的浅比较对象(shallowCompare)。
 * 如果对象包含了复杂的数据结构，深层次的差异可能会产生误判。
 * 比如，如果我们的state变为：
 * state = {
 *      value: { foo: 'bar' }
 * }
 * 每次更改value值的时候进行：
 * this.setState({ value: newValue });
 * 此时直接通过值的比较是行不通的，因为对象的引用关系，
 * 导致在子组件里面接受到的 this.props.value 与 nextProps.value 永远都是不相等的
 * 优点
 * 避免了不必要的render执行
 * 确定
 * 无法对比引用类型值
 * 
 * 如何解决PureRender的缺点
 * 使用深比较：原理与深拷贝类似，比较耗时，不推荐
 * immutable.js：FaceBook官方提出的不可变数据解决方案，主要解决了复杂数据在深拷贝和对比过程中性能损耗
 * 
 * 
 * 常用的优化方法
 * PureRender（PureRenderMixin, PureComponent）, immutable(深比较)
 * 循环加keys :  Keys可以在DOM中的某些元素被增加或删除的时候帮助React识别哪些元素发生了变化(提高了查找性能)
 * 
 * 函数数式组件（能使用函数式组件就是使用函数式组件）
 * 
 * 无状态函数式组件形式上表现为一个只带有一个render方法的组件类，通过函数形式或者ES6 arrow function的形式在创建，
 * 并且该组件是无state状态的。
 * 
 * 因为组件被精简成一个render方法的函数来实现的，由于是无状态组件，所以无状态组件就不会在有组件实例化的过程，
 * 无实例化过程也就不需要分配多余的内存，从而性能得到一定的提升。
 * 
 */
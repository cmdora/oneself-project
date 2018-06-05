import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Dialog.css'

class Dialog extends Component {
    constructor (props) {
        super(props)
        this.timeout = ''
    }

    // static defaultProps = {

    // }

    // static propTypes = {

    // }
    
    componentWillReceiveProps () {
        this.timeout = setTimeout(() => {
            this.props.closeCallback()
            clearTimeout(this.timeout)
        }, 3000)
    }

    render () {
        return (
            <div className="dialog" style={
                {
                    display: (this.props.isShowDialog ? 'block' : 'none')
                }
            }>
                {this.props.type == 1 ? (
                    <div className="content">
                
                        <header>
                            <h2>{this.props.title}</h2>
                        </header>
                        <div className="main">
                            {this.props.children}
                        </div>
                        <footer>
                            <button onClick={
                                () => {
                                    this.props.closeCallback()
                                }
                            }>确定</button>
                        </footer>
                    
                    </div>
                ) :  (
                    <div className="msg-main">
                        {this.props.children}
                    </div>
                )}
                
            </div>
        )
    }
}

// 通过给组件添加defaultProps静态属性实现props的默认值
// 通过给组件添加propTypes静态属性实现props的属性值验证
// 推荐使用下面这种添加静态属性的方式
Dialog.defaultProps = {
    type: '2'
}

Dialog.propTypes = {
    title: PropTypes.element.isRequired, //title类型nubmber
    type: PropTypes.oneOf(['1', '2']),
    //自定义验证规则
    phone (props, propName, componentName) {
        if (!/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(props[propName])) {
            return new Error(
              '您输入的`' + propName + '`属性值，在' +
              ' `' + componentName + '`组件中不通过，请传递正确手机号'
            );
          }
    },
    children: PropTypes.element.isRequired
}

export default Dialog
/**
 * 
 * propTypes 包含一整套验证器，可用于确保你接收的数据是有效的。
 * 
 * 可通过对组件的propTypes 设置类型检测，确保数据的有效性，如果没有按照规定传递，那么在开发环境中就会
 * 实时报warning
 * 
 * propTypes用于规范props的类型与必须的状态。如果组件定义了propTypes,那么在开发环境下，就会对组件的
 * props值的类型作检查，如果传入的props不能与之匹配，React将实时在控制台里报warning（警告）；
 * 
 * 
 * 警告 !==  程序错误   
 * 警告不会影响程序执行，而错误会影响程序执行
 * 
 * propTypes 包含的验证器内容
 * 原始类型
 * array   bool   func   number   object   string   symbol
 * 
 * 任何可被渲染的元素（包括数字、字符串、子元素或数组）
 * PropTypes.node
 * 
 * 一个 React 元素
 * PropTypes.element
 * 
 * 限制你的属性值是某个特定值之一   可以用来做组件类型切换
 * PropTypes.oneOf(['News', 'Photos'])
 * 
 * 限制它为列举类型之一的对象
 * PropTypes.oneOfType([
 *   PropTypes.string,
 *   PropTypes.number,
 *   PropTypes.instanceOf(Message)
 * ])
 * 
 * 
 * 你也可以在任何 PropTypes 属性后面加上 `isRequired` 
 * 后缀，这样如果这个属性父组件没有提供时，会打印警告信息
 * requiredFunc: PropTypes.func.isRequired,
 * 
 * 
 * 
 * 
 * 在react组件中props有一些内置属性
 * 比如props.children
 * 
 */

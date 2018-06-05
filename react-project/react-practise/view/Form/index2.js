import React, {Component} from 'react'

class FormPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            email: 'liuyu',
            name: 'mango'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
    }
    handleChange (e) {
        this.setState({
            email: e.target.value
        })
    }
    handleChange2 (e) {
        this.setState({
            name: e.target.value
        })
    }
    render () {
        return (
            <form>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                <output>
                    {this.state.email}
                </output>

                <select value={this.state.name} onChange={this.handleChange2}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>

                <input defaultValue="asdasd" type="text" ref={(input) => {this.input = input}} />
                <button onClick={
                    (e) => {
                        e.preventDefault();
                        alert(this.input.value)
                    }
                }>获取</button>
            </form>
        )
    }
    componentDidMount () {
        console.log(this.input)
    }
}

export default FormPage


/**
 * 受控组件
 * 其值有由react状态控制的表单元素，就称为受控组件
 * 
 * 可以这么理解
 * 就是react中的某一状态变成了某一输入元素的value值，而react的状态又会随着用户的输入通过
 * 事件不断更新，这样的用法实现了vue中的v-model
 * 
 * 那么问题来了？是每个输入元素都得绑定一个react状态吗？
 * 
 * 是，必须为每个组件都得绑定一个状态，用来控制，还有对应的事件
 * 
 * textarea,  select,  checkbox, ...都变成了使用value控制默认值的选中，
 * 
 * 非受控组件
 * 受控组件是使用react状态控制表单元素，非受控组件其实就是在react保存当前的表单元素（使用dom控制）
 * 在非受控组件中，如果需要给表单元素添加默认值的话，不能控制value属性，应该为其指定defaultValue值
 * 
 * 
 * 
 *  
 **/
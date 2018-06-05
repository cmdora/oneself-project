import React, {Component} from 'react'
import {withRouter, Redirect} from 'react-router-dom'

const NewComponent = (props) => {
    console.log(props)
    return (<div>路由对应组件内的组件</div>)
}

const NewComponentN = withRouter(NewComponent)
/**
 * 使用withRouter高阶组件可以将路由的对象扩展到对应组件的props上
 * （location， history， match）
 */

class FormPage extends Component {
    constructor (props) {
        //在路由 对应的组件 可以获取到location（地址信息），history（浏览对象），match（路由信息）
        super(props)
        console.log(this.props)
        this.state = {
            submitState: true,
            info: {
                name: this.props.match.params.name,
                id_card: '',
                birthday: '',
                sex: '',
                phone: '',
                email: ''
            }
        }
        this.formChange = this.formChange.bind(this)
    }

    submitInof () {
        console.log(this.state.info)
    }

    formChange (e) {
        let input = e.target
        let key = input.name
        let info = this.state.info
        let newInfo = Object.assign(info, {
            [key]: input.value
        })
        //如果当前输入的控件是身份
        if (key == 'id_card') {
            if (input.value.length == 18) {
                let birthday = input.value.substr(6,8)
                newInfo = Object.assign(newInfo, {
                    birthday: birthday
                })
            }
            
        }
        
        this.setState({
            info: newInfo
        })
        let flg = false //标记默认情况为false，代表都不为空
        for (let key in newInfo) {
            if (!newInfo[key]) {
                flg = true
            }
        }
        this.setState({
            submitState: flg
        })

    }
    
    render () {
        let {
            name, id_card, birthday, sex, phone, email
        } = this.state.info
        return (
            <form>
                <p>
                    <label>姓名：</label>
                    <input type="text" name="name" value={name} onChange={this.formChange} />
                </p>
                <p>
                    <label>身份证号：</label>
                    <input type="text" name="id_card" value={id_card} onChange={this.formChange} />
                </p>
                <p>
                    <label>出生日期：</label>
                    <input type="text" name="birthday" value={birthday} onChange={this.formChange} />
                </p>
                <p>
                    <label>性别：</label>
                    <select name="sex" value={sex} onChange={this.formChange}>
                        <option value="1">男</option>
                        <option value="2">女</option>
                    </select>
                </p>
                <p>
                    <label>手机号：</label>
                    <input type="text" name="phone" value={phone} onChange={this.formChange} />
                </p>
                <p>
                    <label>邮箱：</label>
                    <input type="text" name="email" value={email} onChange={this.formChange} />
                </p>
                <button
                disabled={this.state.submitState}
                onClick={
                    (e) => {
                        e.preventDefault();
                        this.submitInof()
                    }
                }>提交</button>
                <Redirect to="/tab_page"/>
                <NewComponentN/>
            </form>
        )
    }
    componentDidMount () {
        console.log(this.input)
    }
}

export default FormPage

/**
 * 路由配置
 * BrowesRouter组件  history路由模式
 * HashRouter组件   hash模式的路由
 * Route组件      路由信息配置   3个渲染方法（render，component，children） 3个props参数（
 *  history浏览对象（push方法，replace方法）， match当前页面路由配置信息， location 地址信息
 * ）
 * Link组件 控制跳转
 * withRouter高阶组件， 可以将history，match，location添加到对应组件的props上
 * 
 * Route 组件的属性
 *  exact：路由全匹配
 *  strict： 匹配路由末尾/
 *  path: 路由地址配置
 */
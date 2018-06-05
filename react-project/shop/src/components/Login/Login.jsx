import React,{Component} from 'react'
import './Login.css'
class Login extends Component{
    constructor(){
        super()
        this.state={
            value:''
        }
    }
    binds(e){
        this.setState({                                                  
            value:e.target.value
        })
    }
    render(){
        return (
            <div>
                <h3>登录</h3>
                <p>用户名：<input type="text" value={this.state.value} onChange={this.binds.bind(this)}/></p>
                <p>  密码：<input type="text" value={this.state.value} onChange={this.binds.bind(this)}/></p>
            </div> 
        )
    }
}
export default Login
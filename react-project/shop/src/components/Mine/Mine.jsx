import React,{Component} from 'react'
import May from './May'

class Mine extends Component{
    constructor(){
        super()
        this.state={
            text:'杨迪'
        }
    }
    chengeText(indxs){
        this.setState({
            text:indxs
        })
    }
    render(){
        return (
            <div>
                <a href="#0">我来找你</a>
                <p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </p>
                <a name='0'></a><p>我在这里</p>
                 <br/>
                 <br/>
                <p>{this.state.text}</p>
                  <May parent={this.chengeText.bind(this)}></May>
            </div>
        )
    }
}
export default Mine
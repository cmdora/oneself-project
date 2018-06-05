import React,{Component} from 'react'
class May extends Component{
    constructor(){
        super()
        this.state={
            text:'小胖'
        }
    }
    set(tet){
       this.props.parent(tet)
    }
    render(){
        console.log(this.props)
        return (
            <div>
                <span onClick={()=>this.set(this.state.text)}>
                    点击改变父级
                </span>
            </div>
        )
    }
}
export default May
import React,{Component} from 'react'
import axios from 'axios'
import './Fenlei.css'
class Fenlei extends Component{
    constructor(){
        super()
        this.state={
            lists:null
        }
    }
    componentDidMount(){
        axios.get('/api/lists').then((res)=>{
            this.setState({
                lists:res.data
            })
        })
    }
    render(){
        let {lists}=this.state
        return (
            <div className='con'>
                <div className='left'>
                    {
                        lists!=null&&lists.two.map((item,index)=>{
                            return (
                                <p key={index}><a href={`#${index}`}>{item}</a></p>
                            )
                        })
                    }
                </div>
                <div className="right">
                    {
                        lists!=null&&lists.one.map((item,index)=>{
                            return (
                                <div className="kk" key={index} >
                                    <a name={index}></a>
                                    <div className='divs' id={index} name={index}>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Fenlei
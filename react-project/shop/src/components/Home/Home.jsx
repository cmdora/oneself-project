import React,{Component} from 'react'
import axios from 'axios'
import './Home.css'
class Home extends Component{
    constructor(){
        super()
        this.state={
            arr:[]
        }
    }
    componentDidMount(){
      axios.get('/api/list').then(res=>{
          this.setState({
              arr:res.data
          })
      })
    }
    binds(item){
        let {history}=this.props;
        history.push({
            pathname:'/mine',
            state:{
                item
            }
        })
    }
    render(){
        let {arr}=this.state;
        return (
            <div>
                {
                    arr.map((item,index)=>{
                      return (
                          <dl key={index} className='ss' onClick={()=>this.binds(item)}>
                              <dt></dt>
                              <dd>{item.text}</dd>
                          </dl>
                      )  
                    })
                }
            </div>
        )
    }
}
export default Home
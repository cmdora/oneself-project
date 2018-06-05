import React,{Component} from 'react'
import axios from 'axios'
import './Car.css'
import {connect} from 'react-redux'
import CarItem from './CarItem'
class Car extends Component{
    componentDidMount(){
        let {dispatch}=this.props;
       axios.get('/api/list').then(res=>{
           dispatch({
               type:'GET_LIST',
               data:res.data
           })
       })
    }
    hhh(slec){
      let {dispatch}=this.props;
      dispatch({
          type:'KKK',   
          slec
      })  
    }
    render(){
        let {data}=this.props;
        return (
            <div>
                 {
                    data!==null&&data.map((item,index)=>{
                        return (
                                <CarItem {...item} key={index}></CarItem>
                        )
                    })
                }
                <div className="footers">
                    全选：<span className={'sel icon iconfont '+(this.props.selecteds?'icon-dui':'')} onClick={()=>this.hhh(!this.props.selecteds)}></span>
                    总价：<span>{this.props.a}</span>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    let a=0;
    let selecteds=false;//默认全选
    state.car.data!==null&&state.car.data.forEach((item,index)=>{
        if(item.selected==1){
            a+=(item.price*item.count)
            selecteds=true
        }
        if(item.selected==0){
            selecteds=false
        }
    })
    //console.log(sta te,'ddf')
    return {
         data:state.car.data,
        a,
        selecteds
    }
}
export default connect(mapStateToProps, null, null, {pure:false})(Car)
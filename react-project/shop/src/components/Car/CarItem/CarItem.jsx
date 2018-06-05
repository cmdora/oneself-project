import React,{Component} from 'react'
import {connect} from 'react-redux'
class CarItem extends Component{
    selected(selected,id){//点击多选框
        let {dispatch}=this.props;
        dispatch({
            type:'SLECTED',
            selected,
            id
        })
    }
    changeCount(id,count){//点击数量，进行改变count
        let {dispatch}=this.props;
        dispatch({
            type:'UPDATE_LIST',
            id,
            count
        })
    }
    render(){
        //console.log(this.props)
        //let {item}=this.props
        let {price,id,selected,text,count}=this.props;
        return (
            <div className='dls'>
                  <p><span className={'sel icon iconfont '+(selected==0?'':'icon-dui')} onClick={()=>this.selected(1-selected,id)}></span></p> 
                                <dl>
                                    <dt><img src={require('./../../../assets/img/one.jpg')} alt=""/></dt>
                                    <dd>
                                        <span>{text}</span><br/>
                                        <span>{price}元 <button  onClick={()=>this.changeCount(id,--count)}>-</button> {count} <button onClick={()=>this.changeCount(id,++count)}>+</button> </span>
                                    </dd>
                    </dl> 
            </div>
        )
    }
}
// const mapStateToProps=(state)=>{
//     console.log(state)
//     return {

//     }
// }
export default connect(null)(CarItem)
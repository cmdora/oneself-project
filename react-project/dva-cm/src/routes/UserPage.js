import React,{Component} from 'react';
import { connect } from 'dva';
import styles from './UserPage.css';
import UserList from '../layout/UserList'

class UserPage extends Component{
  render(){
    console.log(this.props)
     return (
      <div className={styles['user-page']}>
        用户列表
        <UserList />
      </div>
    );
  }
  componentDidMount(){
    this.props.getList('1')
  }
}

UserPage.propTypes = {
};

export default connect((state)=>{
  console.log(state)
  return {
    getListInfo:state.users.data
  }
},(dispatch)=>{
  return {
    getList(data){
      dispatch({
        type:'users/fetch',
        payload:data
      })
    }
  }
})(UserPage);

 
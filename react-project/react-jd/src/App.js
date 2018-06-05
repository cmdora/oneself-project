import React, { Component } from 'react';
import {
  NavLink,
  Route,
  withRouter,
  Switch
} from 'react-router-dom'
import { connect } from 'react-redux'
document.documentElement.style.fontSize = window.innerWidth / 375 * 50 + "px";

import './App.css';
import { routerMap } from './router/routerMap.js'

import Header from './components/Common/Header'
import Main from './components/Common/Main'
import Footer from './components/Common/Footer'
import FooterItem from './components/Common/Footer/FooterItem'

const mapStateToProps = (state, ownProps) => {
  return {
    userInfo: state.login.userInfo
  }
}



@withRouter
@connect(mapStateToProps)
class App extends Component {
  render() {
    const { location, userInfo } = this.props
    return (
      <div className="App">
          <div className='wrap'>
            <Header userInfo={userInfo}/>
            <Main className="content">
              <Switch>
                {
                  routerMap.ROUTER_VIEW.map((item , index) => {
                    return (
                      <Route
                      exact
                      path={item.path}
                      component={item.component}
                      key={index}>
                      </Route>
                    )
                  })
                }
              </Switch>
            </Main>
            {
              /\/classify/.test(location.pathname)
              ? ''
              : <Footer>
                  {
                    routerMap.ENV.map((item, index) => {
                    return (
                      <NavLink
                            to={item.to}
                            item={item}
                            key={index}
                            activeClassName={item.active}>
                        <FooterItem icon={item.iconfont} text={item.text}/>
                      </NavLink>
                    )
                    })
                  }
                </Footer>
            }
          </div>
      </div>
    );
  }
}

export default App
// export default connect(null,null,null,{pure: false})(App)  // 第一种方式
// @connect()  // 第二种解决方案 
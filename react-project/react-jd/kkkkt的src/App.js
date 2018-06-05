import React, { Component } from 'react';
import { 
  NavLink,
  Route,
  withRouter
} from 'react-router-dom'
import { ROUTER_MAP } from './router/routerMap'
import Header from './components/Common/Header'
import Footer from './components/Common/Footer'
import Main from './components/Common/Main'
import FooterItem from './components/Common/Footer/FooterItem'
import './App.css'

class App extends Component {
  render() {
    const { location } = this.props
    return (
      <div className="app">
        <div className='app'>
          <Header/>
          <Main>
            {
              ROUTER_MAP.ROUTER_VIEW.map((item, idx) => {
                return (
                  <Route 
                    exact
                    path={item.path}
                    component={item.component}
                    key={idx}>
                  </Route>
                )
              })
            }
          </Main>
          {
            /\/classify/.test(location.pathname)
            ? ''
            : <Footer>
                {
                  ROUTER_MAP.NAV.map((item, idx) => {
                    return (
                      <NavLink
                        to={item.to}
                        activeClassName={item.active}
                        key={idx}>
                          <FooterItem title={item.title} icon={item.icon}/>
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

export default withRouter(App);


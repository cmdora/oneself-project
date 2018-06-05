import React, { Component } from 'react';
import './App.css';
import {data} from './router/data.js'
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom'
import FooterItem from './components/common/FooterItem'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
           <div className="cen">
             <div className="top">
               {
                 data.nav_link.map((item,index)=>{
                   return (
                      <Route exact key={index} path={item.path} component={item.component}></Route>
                   )
                 })
               }
             </div>
              <div className="bot">
                 {
                  data.nav.map((item,index)=>{
                    return (
                      <NavLink key={index} to={item.to} >
                           <FooterItem {...item}></FooterItem> 
                      </NavLink>
                    )
                  })
                } 
              </div>
              
         </div>
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import Details from './components/Details'
import {
    BrowserRouter as Router,
    NavLink,
    Route
} from 'react-router-dom'
import axios from 'axios'
import './ClassIfy.css'

class ClassIfy extends Component {
    constructor () {
        super()
        this.state = {
            datalist: null
        }
    }
    componentDidMount () {
        const { datalist } = this.state
        axios.get('api/classify')
            .then((res) => {
                this.setState({
                    datalist: res.data
                })
            })
            .catch( e => {
                throw new Error(e)
            })
    }
    render () {
        const { datalist } = this.state
        const { match } = this.props
        return (
            <div className="classify">
                <Router>
                    <div className="box">
                        <div className="lefts">
                           {
                               datalist !== null && datalist.map((item, index) => {
                                   return (
                                       <NavLink
                                       to={{
                                           pathname: `${match.url}/${index}`,
                                           state: {
                                               item: item.datas
                                           }
                                       }}
                                       key={index}>
                                           {item.tit}
                                       </NavLink>
                                   )
                               })
                           }
                        </div>
                        <div className="rights">
                            {
                               datalist !== null && datalist.map((item, index) => {
                                   return (
                                       <Route
                                       exact
                                       path={`${match.url}/${index}`}
                                       component={ Details }
                                       key={index}>
                                       </Route>
                                   )
                               })
                           }
                           <Route exact path={match.url} render={() => (
                               <h3 style={{textAligin: 'center',width: '100%'}}>测试页面</h3>
                            )}></Route>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}

export default ClassIfy


// <Router>
//                     <div>
//                         <div className="lefts">
//                             {
//                                 datalist !== ndivl && datalist.map((item, index) => {
//                                     return (
//                                         123 
//                                     )
//                                 })
//                             }
//                         </div>
//                         <div className="rights">
//                             {
//                                 datalist !== ndivl && datalist.map((item, index) => {
//                                     return (
//                                        456
//                                     )
//                                 })
//                             }
//                         </div>
//                     </div>
//                 </Router>
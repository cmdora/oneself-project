import React, { Component } from 'react'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'

const Test = ({match}) => {
    return (
        <div>
            test{match.params.id}
        </div>
    )
}
class ClassIfy extends Component {
    render () {
        const { match } = this.props
        return (
            <div>
                <Router>
                    <div>
                    classify
                    <Link to={`${match.url}/a`}>
                        aaaaa
                    </Link>
                    <Link to={`${match.url}/b`}>bbb</Link>
                    <Route path={`${match.url}/:id`} component={Test}/>
                    <Route path={`${match.url}`} render={() => {
                        return <div>测试页面</div>
                    }}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default ClassIfy
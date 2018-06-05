import React, {Component} from 'react'



class HeaderBar extends Component {
    constructor (props) {
        super(props)
        this.state= {
            num: 0
        }
    }

    addNum () {
        this.setState({
            num: this.state.num + 1
        }, () =>  {
            this.props.numchange(this.state.num)
        })
        
    }

    removeNum () {
        this.setState({
            num: this.state.num - 1
        }, () => {
            this.props.numchange(this.state.num)
        })
        
    }
    
    render () {
        return (
            <div>
                <button onClick={() => {
                    this.addNum()
                }}>加</button>
                <output>{this.state.num}</output>
                <button onClick={() => {
                    this.removeNum()
                }}>减</button>
            </div>
        )
    }
}

export default HeaderBar

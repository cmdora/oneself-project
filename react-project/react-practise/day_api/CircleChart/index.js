import React, {Component} from 'react'
import CircleChart from './CircleChart'

let divStyle = {
    display: 'flex',
    width: "100%"
}
let CircleStyle = {
    flex: '1',
    width: '200px',
    height: '200px'
}

class CirclePage extends Component {
    constructor (props) {
        super(props)
       
    }
    
    render () {
        return (
            <div 
                style={divStyle}
            >
                <CircleChart
                    circleColor="#0f0"
                    countNum={1000}
                    num={500}
                    style={CircleStyle}
                >
                    <div>
                        <output>10000</output>
                        <span>用户注册已经完成</span>
                    </div>
                </CircleChart>
                <CircleChart
                    circleColor="#00f"
                    countNum={1000}
                    num={800}
                    style={CircleStyle}
                >
                    <div>
                        <output>10000</output>
                        <span>用户注册已经完成</span>
                    </div>
                </CircleChart>
                <CircleChart
                    circleColor="#f00"
                    countNum={1000}
                    num={200}
                    style={CircleStyle}
                >
                    <div>
                        <output>10000</output>
                        <span>用户注册已经完成</span>
                    </div>
                </CircleChart>
            </div>
        )
    }
}

export default CirclePage

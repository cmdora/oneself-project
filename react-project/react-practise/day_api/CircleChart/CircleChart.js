import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './CircleChart.css'

class CircleChart extends Component {
    constructor (props) {
        super(props)
        this.state = {
            width: 400,
            height: 400
        }
    }

    //初始canvas信息
    initCircleInfo () {
        this.canvas = this.refs.canvas
        this.ctx = this.canvas.getContext('2d') 
    }

    //创建背景圆环
    createBgCircle () {
        this.ctx.beginPath()  //画笔开始
        this.ctx.lineWidth = 20  //画笔宽度
        this.ctx.strokeStyle = "#eee"   //线条颜色
        this.ctx.arc(
            this.state.width/2,  //圆心的X
            this.state.width/2,  //圆心的Y
            this.state.width/2-10,  //园的半径
            0,  //开始角度
            (360/180)*Math.PI,   //结束角度
            false  //绘制方向
        )   //画园
        // 角度的算法   (度数 /  180) * π
        this.ctx.stroke()   //描边
    }

    //创建进度圆环
    createCircle () {
        let arcDeg = (this.props.num/this.props.countNum) * 360
        this.ctx.beginPath()
        this.ctx.lineWidth = 20
        this.ctx.strokeStyle = this.props.circleColor
        this.ctx.lineCap="round";
        this.ctx.arc(
            this.state.width/2,
            this.state.width/2,
            this.state.width/2-10, 
            (270/180)*Math.PI, 
            ((270+arcDeg)/180)*Math.PI, 
            false 
        )
        this.ctx.stroke()
    }

    componentDidMount () {
        this.initCircleInfo()
        this.createBgCircle()
        this.createCircle()
    }
    
    render () {
        return (
            <div className="circle-chart">
                <canvas 
                    ref="canvas"
                    width={this.state.width}
                    height={this.state.height}
                ></canvas>
                <div className="citcle-text">
                    {this.props.children}
                </div>
            </div>
        )
    }

}

CircleChart.defalutProps = {
    circleColor: "#f00",
    num: 0,
    countNum: 0
}

CircleChart.propTypes = {
    children: PropTypes.element.isRequired,
    circleColor: PropTypes.string,
    num: PropTypes.number,
    countNum: PropTypes.number
}

export default CircleChart

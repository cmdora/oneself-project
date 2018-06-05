import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import axios from 'axios'
import List from './List'
import './Home.css'

class Home extends Component {
    constructor () {
        super()
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
            slideIndex: 0,
        }
    }
    componentDidMount () {
        const { dispatch } = this.props
        
        axios.get('/api/jdlist')
        .then((res) => {
            const jdList = JSON.parse(res.data.recommend)
            if ( jdList.code !== '0') return
            dispatch({
                type: 'GET_JDLIST',
                jdList: jdList.wareInfoList
            })
        })
        .catch( e => {
            throw new Error(e)
        })
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
            }, 100);
    }
    render () {
        const { jdList } = this.props
        return (
            <div className="home1">
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite
                        selectedIndex={1}
                    >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={`http://img.zcool.cn/community/01690955496f930000019ae92f3a4e.jpg@2o.jpg`}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
                {
                    // 在 jdList 不是 null 时进行渲染
                    jdList !== null && jdList.map((item , index) => { 
                        return <List {...item} key={index} />
                    })  
                }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        jdList: state.home.jdList
    }
}

export default connect(mapStateToProps)(Home)
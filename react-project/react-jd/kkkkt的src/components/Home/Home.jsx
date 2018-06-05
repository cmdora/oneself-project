import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import List from './List'
import { addJdListAction } from '../../store/action/home'
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
            slideIndex: 0,
        }
    }
    componentDidMount() {
        const { dispatch } = this.props

        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);

        axios.get('/api/jdlist')
            .then((res) => {
                const jdList = JSON.parse(res.data.recommend)
                if (jdList.code !== '0') return

                dispatch(addJdListAction(jdList.wareInfoList))
            })
            .catch(e => {
                throw Error(e)
            })
    }
    render() {
        const { jdList, history } = this.props
        return (
            <div>
                <WingBlank>
                    <Carousel
                        autoplay={false}
                        infinite
                        selectedIndex={1}
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
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
                    jdList !== null && jdList.map((item, key) => {
                        return <List {...item} key={key} />
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state, oweProps) => {
    return {
        jdList: state.home.jdList
    }
}

export default connect(mapStateToProps)(Home)
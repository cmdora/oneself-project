import React, {Component} from 'react'
import PropTypes from 'prop-types'
import emitter from '../../../../events';

class List extends Component {
    constructor (props) {
        super(props)
        this.state= {
            list: [
                {
                    text: '文字0',
                    num: 0
                },
                {
                    text: '文字10',
                    num: 10
                },
                {
                    text: '文字5',
                    num: 5
                },
                {
                    text: '文字1',
                    num: 1
                }
            ],
            status: 0
        }
    }

    componentDidMount() {
        // 组件装载完成以后声明一个自定义事件
        this.eventEmitter = emitter.addListener('changeFilter', (status) => {
            this.setState({
                status: status,
            });
        });
    }

    componentWillUnmount() {
        emitter.removeListener(this.eventEmitter);
    }
    
    render () {
        const data = this.state.list.filter((item) => {
            if(this.state.status == 0) {
                return true
            } else if (this.state.status == 1) {
                return item.num < 10
            } else if (this.state.status == 2) {
                return item.num < 5
            }
        })
        return (
            <div>
                <ul>
                    {data.map( (item) => {
                        return (<li>{item.text}</li>)
                    })}
                </ul>
            </div>
        )
    }
}

export default List

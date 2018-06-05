import React, {Component} from 'react'

const listPage = (ListComponent, getPageData) => {
    return class extends Component {
        constructor (props) {
            super(props)
            this.state = {
                listData: [],
                page: 0,
                pageSize: 10
            }

        }
        componentWillMount () {
            this.getData(this.state.page, this.state.pageSize)
        }

        getData (page, pageSize) {
            console.log(page, pageSize)
            getPageData(page, pageSize).then((data) => {
                this.setState({
                    page: page,
                    listData: data.data
                })
            })
        }

        nextPage () {
            this.getData(this.state.page+1, this.state.pageSize)
            
        }
    
        prevPage () {
            this.getData(this.state.page-1, this.state.pageSize)
        }

        render () {
            let { listData } = this.state
            
            return (
                <div>
                    <ListComponent listData={listData} {...this.props} page={this.state.page} />
                    <div>
                        <button onClick={() => {this.prevPage()}}>上一页</button>
                        <button onClick={() => {this.nextPage()}}>下一页</button>
                    </div>
                </div>
            )
        }
    }
}

export default listPage


/**
 * 高阶组件有什么用？
 * 他可以封装一个可以复用的逻辑
 * 
 * 
 * 高阶组件怎么写？
 * 太简单了。  写一个函数，接收一个组件，在函数内部创建一个新组件，在新组件上对原来的组件进行扩展
 * 并且返回这个组件
 * 
 * 
 * 复用？
 * 
 * 
 * 
 */

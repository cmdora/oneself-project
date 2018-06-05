import React, {Component} from 'react'

import Tab from './Tab'
import TabPanel from './TabPanel'

const Panel = () => {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
            <button>点击按钮</button>
        </div>
    )
}

class TabPage extends Component {
    constructor (props) {
        super(props)
       
    }
    
    render () {
        return (
            <div>
                <h2>tab切换案例</h2>
                <Tab changeTab={() => {
                    console.log('切换了并且获取到当前显示面板的索引')
                }}>
                    <TabPanel title="面板一">
                        <Panel />
                    </TabPanel>
                    <TabPanel title="面板二">
                        面板内容2
                    </TabPanel>
                    <TabPanel title="面板三">
                        面板内容3
                    </TabPanel>
                </Tab>
            </div>
        )
    }
}

export default TabPage
/**
 * tab切换案例
 * 
 * 可能有多个面板，也可能面板的内容是文字图片，或者其他
 * 面板内容肯定是单独的一个组件
 *   
 * 调用形式
 * <Tab>
        <TabPanel title="面板一">
            面板内容
        </TabPanel>
        <TabPanel title="面板二">
            面板内容
        </TabPanel>
        <TabPanel title="面板三">
            面板内容
        </TabPanel>
    </Tab>


    组件嵌套，在vue里面有slot可以实现组件嵌套，react里面并没有slot这个东西
 */

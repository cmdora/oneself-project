import React, {Component} from 'react'
// import './Dialog.css'
import Collapse from './Collapse'
import CollapseItem from './CollapseItem'

class CollapsePage extends Component {
    constructor (props) {
        super(props)
    }
    
    render () {
        return (
            <div>
                <Collapse>
                    <CollapseItem title="一致性 Consistency1">
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </CollapseItem>
                    <CollapseItem title="一致性 Consistency2">
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </CollapseItem>
                    <CollapseItem title="一致性 Consistency3">
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </CollapseItem>
                    <CollapseItem title="一致性 Consistency4">
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </CollapseItem>
                </Collapse>
            </div>
        )
    }
}

export default CollapsePage

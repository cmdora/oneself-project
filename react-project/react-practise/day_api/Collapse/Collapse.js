import React, {Component} from 'react'
import './Collapse.css'

class Collapse extends Component {
    constructor (props) {
        super(props)
    }
    //根据索引控制当前折叠面板的状态
    showCollapse (index) {
        let collapseContent = this.refs["collapse-item"+index],
            isShoe = collapseContent.style.display
        if (isShoe == 'none') {
            collapseContent.style.display = 'block'
        } else {
            collapseContent.style.display = 'none'
        }
    }
    render () {
        let items = this.props.children  //获取所有的折叠面板
        return (
            <div className="collapse">
                {
                    //遍历所有的折叠面板添加功能
                    items.map((item, index) => {
                        return (
                            <div className='collapse-item' key={index}>
                                <h2 onClick={() => {
                                    this.showCollapse(index)
                                }}>{item.props.title}</h2> {/**获取对应面板的标题**/}
                                <div 
                                    ref={"collapse-item"+index}
                                    style={{'display': 'none'}}
                                    className="content"
                                >
                                    {item}
                                </div>
                            </div>
                        )
                    }) 
                }
                
            </div>
        )
    }
}

export default Collapse

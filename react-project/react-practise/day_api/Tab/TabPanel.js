import React, {Component} from 'react'


class TabPanel extends Component {
    constructor (props) {
        super(props)
    }
    
    render () {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default TabPanel

//在组件内的props上有一个默认属性children，这个属性可以获取到组件的包含内容



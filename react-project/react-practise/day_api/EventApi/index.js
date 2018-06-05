import React, {Component} from 'react'



class EventPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            menuData: [
                {
                    text: '首页',
                    active: true
                },
                {
                    text: '代码管理',
                    active: false,
                    children: [
                        {text: '二级导航'},
                        {text: '二级导航'},
                        {text: '二级导航'}
                    ]
                },
                {
                    text: '系统管理',
                    active: false,
                    children: [
                        {text: '二级导航'},
                        {text: '二级导航'},
                        {text: '二级导航'}
                    ]
                },
                {
                    text: '学习管理',
                    active: false,
                    children: [
                        {text: '二级导航'},
                        {text: '二级导航'},
                        {text: '二级导航'}
                    ]
                }
            ]
        }
    }
    subMenuShow (e, index) {
        console.log(this.refs)
        //通过dom操作实现
        this.refs['sub_menu'+index].style.display = "none"
        

        //通过数据驱动
        // let newMenuData = this.state.menuData;
        // newMenuData.forEach((item) => {
        //     item.active = false
        // })
        // newMenuData[index].active = !newMenuData[index].active
        // this.setState({
        //     [menuData[index]]: !newMenuData[index].active
        // })
    }
    render () {
        return (
            <div>
               <ul>
                    {
                        this.state.menuData.map((item, index) => {
                            return (
                                <li>
                                    <a href="#" onClick={(e) => {
                                        this.subMenuShow(e, index)
                                    }}>{item.text}</a>
                                    {item.children && (<ul style={{
                                        display: (item.active ? 'block' : 'none')
                                    }}>
                                        {
                                        item.children.map((item2, index2) => {
                                            return (
                                                <li><a href="#">{item2.text}</a></li>
                                            )
                                        })
                                        }
                                    </ul>)}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default EventPage

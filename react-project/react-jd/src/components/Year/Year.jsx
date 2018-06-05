// import React, { Component } from 'react'
// import { mixin } from 'core-decorators'

// const mixinObj = {
//     componentWillMount () {
//         console.log('Mixin作用：功能需要被不同组件公用。')
//     }
// }

// // mixins 混入
// @mixin(mixinObj)
// class Year extends Component {
//     render () {
//         return (
//             <div>Year</div>
//         )
//     }
// }

// export default Year



// import React, { Component } from 'react'

// const HOC = (Com) => {
//     return class extends Component {
//         proc (arg) {
//             console.log(arg)
//         }
//         // bind 是之后绑定 吗， 所以说 在绑定输出的时候 Com 组件上指的就是 Year
//         render () {
//             const props = Object.assign({}, this.props, {ref: this.proc.bind(this)})
//             return (
//                 <Com {...props}/>
//             )
//         }
//     }
// }

// class Year extends Component {
//     render () {
//         console.log(this)
//         return (
//             <div>Year</div>
//         )
//     }
// }

// export default HOC(Year)




// import React, { Component } from 'react'

// const HOC = (Com) => {
//     return class extends Component {
//         constructor () {
//             super()

//             this.state = {
//                 value: '刘建行'
//             }
//         }
//         change (e) {
//             // 在这里进行修改
//             // this.setState({
//                 // value: e.target.value
//             // })
//         }
//         render () {
//             const datas = {
//                 options: {
//                     value: this.state.value,
//                     onChange: (e) => {
//                         this.setState({
//                             value: e.target.value
//                         })
//                     }
//                 },
//                 name: 'ljh',
//                 age: '18'
//             }
//             return (
//                 // 在这里进行传值
//                 // <Com {...this.props} value={this.state.value} headleChange={this.change.bind(this)}/>
                
//                 // 使用其他元素 包裹
//                 <div style={{display: 'flex'}}>
//                     <div>
//                         123456
//                     </div>
//                     <div>
//                         <Com {...this.props} datas={datas}/>
//                     </div>
//                 </div>
//             )
//         }
//     }
// }

// class Year extends Component {
//     render () {
//         console.log(this.props.datas.options)
//         return (
//             // 在这里 实质 触发 
//             <input type='text' {...this.props.datas.options}/>
//         )
//     }
// }

// export default HOC(Year)




// 高阶组件 的  实现 原理
// import React, { Component } from 'react'

// const newHoc = (arg) => {
//     console.log(arg)
//     return function newMine (Com) {
//         return class extends Component {
//             render () {
//                 return (
//                     <Com {...this.props} {...arg}/>
//                 )
//             }
//         }        
//     }
// }

// class Year extends Component {
//     render () {
//         return (
//             <div>
//                 反向继承
//                 <input type="text"/>
//                 <textarea name="" id="" cols="30" rows="10"></textarea>
//             </div>
//         )
//     }
// }

// const datas = {
//     name: 'ljh',
//     age: '12'
// }

// export default newHoc(datas)(Year)






// // 受控组件  单选按钮
// import React, { Component } from 'react'

// class Year extends Component {
//     constructor () {
//         super ()

//         this.state = {
//             value: 'aa'
//         }
//     }
//     change (e) {
//         this.setState({
//             value: e.target.value
//         })
//     }
//     render () {
//         return (
//             <div>
//                aa: <input 
//                     type="radio"
//                     value='aa' 
//                     checked={this.state.value === 'aa'} 
//                     onChange={this.change.bind(this)}
//                     /><br />
//                bb: <input 
//                     type="radio"
//                     value='bb' 
//                     checked={this.state.value === 'bb'} 
//                     onChange={this.change.bind(this)}
//                     /><br />
//                cc: <input 
//                     type="radio"
//                     value='cc' 
//                     checked={this.state.value === 'cc'} 
//                     onChange={this.change.bind(this)}
//                     />
//             </div>
//         )
//     }
// }


// export default Year






// // 受控组件  多选按钮
// import React, { Component } from 'react'

// class Year extends Component {
//     constructor () {
//         super ()

//         this.state = {
//             checkValue: []
//         }
//     }
//     change (e) {
//         // 拿出数据
//         const { value , checked } = e.target
//         let { checkValue } = this.state

//         // 判断选中时 和不在数组内的情况
//         if(checked && checkValue.indexOf(value) === -1){
//             checkValue.push(value)
//         } else {
//             // 从已选中的中 过滤当选的值
//             checkValue = checkValue.filter(x => x !== value)
//         }

//         // 然后重新设置
//         this.setState({
//             checkValue
//         })
//     }
//     render () {
//         return (
//             <div>
//                aa: <input 
//                     type="checkbox"
//                     value='aa' 
//                     checked={this.state.checkValue.indexOf('aa') !== -1} 
//                     onChange={this.change.bind(this)}
//                     /><br />
//                bb: <input 
//                     type="checkbox"
//                     value='bb' 
//                     checked={this.state.checkValue.indexOf('bb') !== -1} 
//                     onChange={this.change.bind(this)}
//                     /><br />
//                cc: <input 
//                     type="checkbox"
//                     value='cc' 
//                     checked={this.state.checkValue.indexOf('cc') !== -1} 
//                     onChange={this.change.bind(this)}
//                     />
//             </div>
//         )
//     }
// }


// export default Year






// // 受控组件  多选按钮
// import React, { Component } from 'react'

// class Year extends Component {
//     constructor () {
//         super ()

//         this.state = {
//             checkValue: []
//         }
//     }
//     change (e) {
//         // 拿出数据
//         const { value , checked } = e.target
//         let { checkValue } = this.state

//         // 判断选中时 和不在数组内的情况
//         if(checked && checkValue.indexOf(value) === -1){
//             checkValue.push(value)
//         } else {
//             // 从已选中的中 过滤当选的值
//             checkValue = checkValue.filter(x => x !== value)
//         }

//         // 然后重新设置
//         this.setState({
//             checkValue
//         })
//     }
//     render () {
//         return (
//             <div>
//                aa: <input 
//                     type="checkbox"
//                     value='aa' 
//                     checked={this.state.checkValue.indexOf('aa') !== -1} 
//                     onChange={this.change.bind(this)}
//                     /><br />
//                bb: <input 
//                     type="checkbox"
//                     value='bb' 
//                     checked={this.state.checkValue.indexOf('bb') !== -1} 
//                     onChange={this.change.bind(this)}
//                     /><br />
//                cc: <input 
//                     type="checkbox"
//                     value='cc' 
//                     checked={this.state.checkValue.indexOf('cc') !== -1} 
//                     onChange={this.change.bind(this)}
//                     />
//             </div>
//         )
//     }
// }


// export default Year






// // 受控组件  下拉菜单 单选
// import React, { Component } from 'react'

// class Year extends Component {
//     constructor () {
//         super ()

//         this.state = {
//             checkValue: ''
//         }
//     }
//     change (e) {
//         console.log(e.target.value)
//         this.setState({
//             checkValue: e.target.value
//         })
//     }
//     render () {
//         return (
//             <div>
//                 <select value={this.state.checkValue} onChange={this.change.bind(this)}>
//                     <option>北京</option>
//                     <option>上海</option>
//                     <option>深圳</option>
//                 </select>
//             </div>
//         )
//     }
// }


// export default Year





// // 受控组件  多选 下拉菜单  multiple
// import React, { Component } from 'react'

// class Year extends Component {
//     constructor () {
//         super ()

//         this.state = {
//             checkValue: ['北京', '上海']
//         }
//     }
//     change (e) {
//         const { options } = e.target

//         const arr = Object.keys(options) // [0 , 1 , 2 , 3]
//         .filter( x => options[x].selected === true) // [0 , 1 , 2]
//         .map(x => options[x].value)// ['北京', '上海']

//         this.setState({
//             checkValue: arr
//         })
//     }
//     render () {
//         return (
//             <div>
//                 <select multiple={true} value={this.state.checkValue} onChange={this.change.bind(this)}>
//                     <option>北京</option>
//                     <option>上海</option>
//                     <option>深圳</option>
//                 </select>
//             </div>
//         )
//     }
// }


// export default Year




// // 性能优化
// import React, { Component } from 'react'
// import PureRenderMixin from 'react-addons-pure-render-mixin'

// class Year extends Component {
//     constructor () {
//         super ()

//         this.state = {
//             number: '123'
//         }

//         this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
//     }
//     componentDidMount () {
//         this.setState({
//             number: '123'
//         })
//     }
//     componentWillMount () {
//         console.log('触发了')
//     }
//     render () {
//         return (
//             <div>
//                 year
//             </div>
//         )
//     }
// }


// export default Year






import React, { Component } from 'react'
import { getShopCart } from '../../api/service'
import { getShopc } from '../../store/action/year'
import { connect } from 'react-redux'
import axios from 'axios'

import './Year.css'

class Year extends Component {
    constructor () {
        super () 

        this.state = {
            checkValue: []
        }
    }
    componentDidMount () {
        // 有了 mapDispatchToProps 之后 this.props 中的信息 就没有 dispatch 属性了
        getShopCart()
        .then((res) => {
            this.saveShopCart(res)
        })
        .catch(e => {
            return new Error(e);
        })
    }

    /**
     * 将购物车数据 存入 store 
     * 封装的获取 购物车数据 是指重新渲染的数据
     * 购物车 加减的 功能
     */
    saveShopCart (res) {
        const { getShopc } = this.props

        const data = res.data[0].active_item
        // dispatch(getShopc(data))

        getShopc(data)
    }

    ChangeNum (id, type) {
        axios.post('/api/shopc_add', {
             id,
             type
        })
        .then((res) => {
            this.saveShopCart(res)
        })
        .catch(e => {
            return new Error(e)
        })
    }

    /**
     * 购物车单选按钮
     */
    headleChange (e) {
        const { checked,value  } = e.target
        
        let { checkValue } = this.state
        if( checkValue && checkValue.indexOf(value) === -1){
            checkValue.push(value);
        } else {
            checkValue = checkValue.filter(x => x !== value)
        }

        this.setState({
            checkValue
        })

    }

    /**
     * 全选事件
     */
    checkAll (e) {
        const { checked } = e.target
        const { ShopCart } = this.props
        let newArr = []

        if ( checked ) {
            ShopCart.filter(x => newArr.push(x.id))
        } else {
            newArr = []
        }

        this.setState({
            checkValue: newArr
        })
    }

    render () {
        const details = 'details'
        const year = 'year'
        const { ShopCart } = this.props
        const { checkValue } = this.state
        return (
            <div className={year}>
                {
                    ShopCart !== null
                    ? <div>
                        {
                            ShopCart.map((item, index) => {
                                return (
                                    <div key={index} className={details}>
                                        <div>
                                            <input 
                                                onChange={this.headleChange.bind(this)} 
                                                className='checkbox' 
                                                type="checkbox"
                                                checked={checkValue.indexOf(item.id) !== -1}
                                                value={item.id}
                                                />
                                        </div>
                                        <div>
                                            <img src={item.images.cart} alt=""/>
                                        </div>
                                        <div className='text'>{item.name}</div>
                                        <div>
                                            <button className='btn' onClick={this.ChangeNum.bind(this, item.id, -1)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button className='btn' onClick={this.ChangeNum.bind(this, item.id, +1)}>+</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div>
                            全选： <input type="checkbox" className='checkbox' checked={checkValue.length === ShopCart.length} onChange={this.checkAll.bind(this)}/>
                        </div>
                      </div>
                    : ''
                }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ShopCart: state.year.ShopCart
    }
}

const mapDispatchToProps = {
    getShopc
}

export default connect(mapStateToProps, mapDispatchToProps)(Year)

// 在请求中有三种状态
// resquest 请求中
// relove  成功
// reject  失败
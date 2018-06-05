import React, {Component} from 'react'
import listPage from './listPage'


const List = ({listData, page}) => {
    return (
        <ul>
            {page}
            {listData.map((item, index) => {
                return (<li key={index}>{item}</li>)
            })}
        </ul>
    )
}
const ListSetPage = listPage(List, (page, pageSize) => {
    var listLenth = 100;
    let dataArr = [];

    for (let i=page*pageSize; i<page*pageSize+pageSize; i++){
        dataArr.push(i)
    }
    return new Promise((resovle, reject) => {
        setTimeout(() => {
            resovle({
                page: page,
                data: dataArr,
                count: 100
            })
        }, 1000)
    })
})

const List2 = ({listData, page}) => {
    return (
        <div>
            {page}
            {listData.map((item, index) => {
                return (
                    <section key={index}>
                        <h2>标题</h2>
                        <p>{item}</p>
                    </section>
                )
            })}
        </div>
    )
}
const SectionList = listPage(List2, (page, pageSize) => {
    var listLenth = 100;
    let dataArr = [];

    for (let i=page*pageSize; i<page*pageSize+pageSize; i++){
        dataArr.push(i+'爱神的箭卡仕达就开始打哈数据库大厦肯德基 ')
    }
    return new Promise((resovle, reject) => {
        setTimeout(() => {
            resovle({
                page: page,
                data: dataArr,
                count: 100
            })
        }, 1000)
    })
})


class HocPage extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div>
                <ListSetPage />
                <SectionList />
            </div>
        )
    }
}

export default HocPage
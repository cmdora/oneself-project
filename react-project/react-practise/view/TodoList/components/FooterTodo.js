import React,{Component} from 'react'

export default (props) => {
    return (
        <div>
            <a href="javascript:;" onClick={() => {
                props.onSetFilter('SHOW_ALL')
            }} >显示全部</a>
            <a  href="javascript:;" onClick={() => {
                props.onSetFilter('SHOW_ACTIVE')
            }}>显示已完成</a>
            <a href="javascript:;" onClick={() => {
                props.onSetFilter('SHOW_NO_ACTIVE')
            }}>显示未完成</a>
        </div>
    )
}
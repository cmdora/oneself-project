import React,{Component} from 'react'

function filter_fn(visibilityFilter, ArrayObj) {
    if (visibilityFilter == 'SHOW_ACTIVE') {
        return ArrayObj.filter((item) => {
            return item.status == 1
        })
    } else if (visibilityFilter == 'SHOW_NO_ACTIVE') {
        return ArrayObj.filter((item) => {
            return item.status == 0
        })
    }else {
        return ArrayObj
    }
}

export default (props) => {
    return (
        <ul>
            {
                filter_fn(props.filterTodo, props.todo).map((item, index) => {
                    return <li key={index} onClick={() => {
                        props.onActionTodo(index)
                    }}>{item.text}{item.status}</li>
                })
            }
        </ul>
    )
}
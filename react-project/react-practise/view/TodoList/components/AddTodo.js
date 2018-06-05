import React,{Component} from 'react'

export default (props) => {
    return (
        <div>
            <input type="text" name="task" onKeyUp={(e) => {
                if (e.keyCode == 13) {
                    console.log('新添加一个任务', e.target.value)
                    props.onAddTodo(e.target.value)
                    e.target.value = ''
                }
            }} />
        </div>
    )
}
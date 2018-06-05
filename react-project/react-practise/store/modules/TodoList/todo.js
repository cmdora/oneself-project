
const todo = (state = [
    {text: '写代码', status: 0}
], actions) => {
    switch (actions.type) {
        case 'ADD_TODO' :   //规则 添加数据
            return state.concat({
                text: actions.text,
                status: 0  //新添加的数据 未完成
            })
        break;
        case 'ACTION_TODO' : //规则  修改对应数据的规则
            state[actions.action].status = 1  //修改为1 完成
            let newState = [...state]  //不能直接修改state.需要重新生成
            return newState
        break;
        default :
            return state
    }
}

export default todo

/**
 * state 是唯一的，不能修改，只能生成新的
 */
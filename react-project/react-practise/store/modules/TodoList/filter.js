
const visibilityFilter = (state = 'SHOW_ALL', actions) => {
    console.log(actions.type)
    switch (actions.type) {
        case 'SET_FILTER' :
            return actions.filter
        break;
        default :
            return state
    }
}

export default visibilityFilter
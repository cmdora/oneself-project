
const initState = {
    userInfo: {},
    isLogin: false
}

const home = (state = initState, actions) => {
    switch (actions.type) {
        case 'aaaa' :
            return Object.assign(state, {
                userInfo: actions.userInfo,
                isLogin: true
            })
        default :
            return state
    }
}
export default home
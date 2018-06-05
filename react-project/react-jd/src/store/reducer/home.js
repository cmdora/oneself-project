const initialinfo = {
    name: 'home', 
    jdList: null
};

const reducer = (state = initialinfo, action) => {
    switch(action.type){
        case 'GET_JDLIST': 
            return {...state, jdList: action.jdList}
        default:
            return state
    }
}

export default reducer
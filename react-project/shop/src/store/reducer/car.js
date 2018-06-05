const initalState={
    data:null
}
const reducer=(state=initalState,action)=>{
    //console.log(action,'sssssss')
    switch(action.type){
        case "GET_LIST":
            return {...state,data:action.data}
        case "UPDATE_LIST":
            let dads={...state};
            dads.data.map((item)=>{
                if(item.id ==action.id){
                    item.count=action.count
                }
            })
            return dads
        case "SLECTED":
            let dadss={...state};
            dadss.data.map((item) => {
                if(item.id ==action.id){
                    item.selected=action.selected
                }
            })
            return dadss
        case "KKK":
            let dadsss={...state};
            dadsss.data.map((item)=>{
                   if(action.slec){
                       item.selected=1
                   }else{
                       item.selected=0;
                   }
            })
                return dadsss
        default:
            return state
    }
}
export default reducer
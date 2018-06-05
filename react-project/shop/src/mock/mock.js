import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
import data from './data/data'
import lists from './data/lists'

const mock=new AxiosMockAdapter(axios)

mock.onGet('/api/list').reply((config)=>{
    return [200, data]
})
mock.onGet('/api/lists').reply((config)=>{
    return [200, lists]
})
export default axios

// const jdList=()=>{
//     mock.onGet('/api/list').reply((config)=>{
//         return new Promise((resolve,reject)=>{
//             resolve([200,data])
//         })
//     })
    
//     mock.onGet('/api/lists').reply((config)=>{
//         return new Promise((resolve,reject)=>{
//             resolve([200,lists])
//         })
//     })
// }
// export default jdList

  // mock.onPost('/api/jdlist').reply((config)=>{
    //     let list=JSON.parse(config.data);
    //     let idx=list.id
    //     let key=0;
    //     let datas=[...data];
    //     console.log(datas)
    //     for(let [index,value] of datas.entries()){
    //         if(idx==index){
    //             key=index
    //         }
    //     }
    //    // console.log(key,'ss')
    //     datas[key].count=++datas[key].count;
    //     return new Promise((resolve,reject)=>{
    //         return [200,datas]
    //     })
    // })

//同源策略：1.协议相同 2.端口号相同 3.域名相同
//基于fetch封装请求方法，支持get和post
// let domin ="http://localhost:8083"
// if(process.env=="development"){
//     domin = ""
// }
// if(process.env=="production"){
//     domin = "http://www.lb717.com"
// }
let  $http={
    get(url,data){
        if(Object.prototype.toString.call(data)!="[object Object]"){
            return {
                then(callback){
                    callback("GET请求入参格式不正确,需要传OBJECT")
                    return {
                        catch(err){
                            err(new Error("入参格式错误"))
                        }
                    }
                }
            };
        }
        let queryString = "?"
        for(let i in data){
            queryString+=(i+"="+data[i]+"&")
        }
       url = encodeURI(url+queryString.slice(0,-1))
        return fetch(url,{
            headers:{
                "Content-Type":"application/json;charset=utf-8"
            },
            credentials: "include"
        }).then(res=>res.json())
    },
    post(url,data){
        if(Object.prototype.toString.call(data)!="[object Object]"){
            return {
                then(callback){
                    callback("GET请求入参格式不正确,需要传OBJECT")
                    return {
                        catch(err){
                            err(new Error("入参格式错误"))
                        }
                    }
                }
            };
        }
        return fetch(url,{
            body:JSON.stringify(data),//字符串
            headers:{
                "Content-Type":"application/json;charset=utf-8",
                "Token":"123123"
            },
            credentials: "include",
            method:"POST"
        }).then(res=>res.json())
    },
}

export default $http
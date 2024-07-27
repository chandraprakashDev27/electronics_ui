import { host } from "../env";

export  function sendHttpRequest(url,formData){
    formData.append('uid','1')
    return new Promise((resolve,reject)=>{
        fetch(host+url, {
            method:"POST",
            body: formData, 
        }).
        then((response)=>{
            resolve(response.json())
        })
    })
}   


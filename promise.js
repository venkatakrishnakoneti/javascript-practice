let p = 2;
const promise = new Promise((resolve, reject) => {
    if(p==2){
        setTimeout(() =>{
            console.log("hello world after 2 sec"),
            resolve("success")
        2000})
    }else{
        reject("failed")
    } 
})

promise.then((message) =>{
    console.log(message)
}).catch((message) =>{
    console.log(message)
})
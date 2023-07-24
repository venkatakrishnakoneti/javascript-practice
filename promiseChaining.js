const add = (a,b) => {
    return new Promise(
        (resolve, reject)=>{
            if(a<0 || b<0){
                return reject("numbers should not be negative")
            }
            resolve(a+b)
        }
    )
}

add(1,2).then((sum)=>{
    console.log(sum)
    return add(sum, 4)
}).then((sum2) => {
console.log(sum2)
}).catch ((message)=>{console.log(message)})
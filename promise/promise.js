const foo = new Promise((resolve,reject)=>{
    let ok = false
    if (ok){
        resolve("the value is smaller than 20")
    }
    else{
        reject("the value is greater than 20")
    }
    
    
    
})

.then(()=>console.log("promise is succeed"))
.catch(()=>console.log("promise is failure"))

console.log(foo)
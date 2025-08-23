let myPromise = new Promise( (resolve, reject) =>{
    reject();
})

myPromise.then(()=>{
    console.log("Success");
}).catch(()=>{
    console.log("Error");
})
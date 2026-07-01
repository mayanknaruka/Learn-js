const promiseOne = new Promise(function(resolve, reject){
    // Do an asyn task
    // DB calls , cryptography, network
    
    setTimeout(function(){
        console.log("Asyn task is complete");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promised consumed");
    
})
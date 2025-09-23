const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // DB calls, cryptographs, network call
    setTimeout(function(){
        console.log('Async task is complete')
    }, 1000);
})

promiseOne.then(function(){
    console.log('Promise consumed')
})
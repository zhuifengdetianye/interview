function aa(){
    return new Promise(resolve=>{
        setTimeout(function(){
            resolve('wwwwww')
        }, 5000)
    })
}
aa().then(v => console.log(v));
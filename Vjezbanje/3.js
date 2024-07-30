function opsegTrokuta(a,b,c){
    return new Promise(function(resolve, reject){
        if(typeof a  == 'number' && typeof b == 'number' && typeof c == 'number'){
            resolve(a+b+c)
        }else{
            reject("Greska")
        }
    })
}

opsegTrokuta(12,3,5)
.then(function(opseg){
    console.log(opseg)
})
.catch(function(greska){
    console.log(greska)
})
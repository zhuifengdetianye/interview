function getRandomNumber(min, max){
    var range = max - min;
    var rand = Math.random();
    return (min + Math.round(rand*range));
}
function getManyRandomNumber(n, min, max){
    var arr = [];
    for(var i=0; i<n; i++){
        arr.push(getRandomNumber(min, max));
    }
    return arr;
}
console.log(getManyRandomNumber(10, 1, 1000));
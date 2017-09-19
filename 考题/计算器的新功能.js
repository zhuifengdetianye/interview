function newFunctionOfCounter(n){
    if(n < 2) return false;
    if(n == 2) return true;
    for(var i=3; i<=Math.sqrt(n); i = i + 2){
        if(n%i == 0){
            return false;
        }
    }
}
console.log(newFunctionOfCounter(5))
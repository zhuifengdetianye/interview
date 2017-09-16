/*
function fizzBuzz(num) {
    console.log(typeof num)
    if(num !== null && typeof num == 'number'){
        return num%3==0 && num%5==0 ? 'fizzbuzz' :  num%3==0 ? 'fizz' : num%5==0 ? 'buzz' : num;
    }else{
        return false;
    }
}
console.log(fizzBuzz(15));
*/
function functionFunction(str) {

    return str + function f(a){
        if(arguments.length > 0){
            return functionFunction(a);
        }
    }
}
console.log(functionFunction('Hello')('world')('hahah'))
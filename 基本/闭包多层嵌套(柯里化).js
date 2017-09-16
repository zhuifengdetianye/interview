function curryIt(fn) {
    return function(f){
        return function a(arg1){
            return function b(arg2){
                return function c(arg3){
                    return f(arg1, arg2, arg3);
                }
            }
        }
    }(fn)
}
var fn = function (a, b, c) {return a + b + c};
console.log(curryIt(fn)(1)(2)(3));

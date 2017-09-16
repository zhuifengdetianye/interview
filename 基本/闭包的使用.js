function makeClosures(arr, fn) {
    var arr1 = [];
    for(var i = 0; i < arr.length; i++){
        arr1[i] = function(a){
            return function(){
                return fn(a);
            }
        }(arr[i]);
    }
    return arr1;
}
console.log(makeClosures([1, 2, 3], function (x) { 
    return x * x; 
})[2]());
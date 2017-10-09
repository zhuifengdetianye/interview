function getMaxNum(arr){
    var temp = 0;
    for(var i=0; i<arr.length; i++){
        temp += arr[i];
        arr[i] = temp;
    }
    return Math.max.apply(this, arr);
}
var arr = [3, 3, -2, 0];
console.log(getMaxNum(arr));
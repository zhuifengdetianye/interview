function maxSum(arr){
    var arr1 = [];
    arr1[0] = arr[0];
    for(var i=1; i<arr.length; i++){
        arr1[i] = arr1[i-1] + arr[i] > arr[i] ? arr1[i-1] + arr[i] : arr[i];
    }
    console.log(Math.max.apply(this ,arr1));
}
//var arr = [-1, 2, 1];
var arr = [-1, -2, -3, -4, -5, -6, -7, -8, -9]
maxSum(arr);
function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    var center = Math.floor(arr.length/2);
    var centerVal = arr.splice(center,1)[0];
    var left = [];
    var right = [];
    
    for(var i = 0; i < arr.length; i++ ){
        if(arr[i] >= centerVal){
            right.push(arr[i]);
        }else{
            left.push(arr[i]);
        }
    }

    return quickSort(left).concat([centerVal],quickSort(right));
}
var arr = [3,5,-1,55,89,12,2,-199,66];
console.log(quickSort(arr));
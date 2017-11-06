function bubbleSort(arr){
    var len = arr.length;
    for(var i=0; i<len; i++){
        for(var j=0; j<len-1-i; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

//获取随机数组
function getManyRandomNumber(n, min, max){
    var arr = [];
    for(var i=0; i<n; i++){
        var range = max - min;
        var rand = Math.random();
        arr.push(min + Math.round(rand*range))
    }
    return arr;
}

//计算时长
function useTime(fn, arr){
    var t1 = new Date().getTime();
    fn(arr);
    var t2 = new Date().getTime();
    return t2 - t1;
}
console.log(useTime(bubbleSort, getManyRandomNumber(10000, 1, 1000)))
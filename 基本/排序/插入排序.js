function insertionSort(arr){
    var len = arr.length;
    var preIndex, current;
    for(var i=1; i<len; i++){
        preIndex = i-1;
        current = arr[i];
        while(preIndex >= 0 && current < arr[preIndex]){
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
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
    return (t2 - t1) + 'ms';
}
console.log(useTime(insertionSort, getManyRandomNumber(100000, 1, 10000)))
function selectionSort(arr){
    var len = arr.length;
    var temp, minIndex;
    for(var i=0; i<len; i++){
        minIndex = i;
        for(var j=i+1; j<len; j++){
            if(arr[minIndex] > arr[j]){
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
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
console.log(useTime(selectionSort, getManyRandomNumber(10000, 1, 1000)))
function quickSort(arr, left, right){
    var partionIndex;
    if(left < right){
        partionIndex = partion(arr, left, right);
        quickSort(arr, left, partionIndex-1);
        quickSort(arr, partionIndex+1, right);
    }
    return arr;
}
function partion(arr, left, right){
    var pivotKey = arr[left];
    while(left < right){
        while(left < right && arr[right] >= pivotKey){
            right--;
        }
        swap(arr, left, right);
        while(left < right && arr[left] <= pivotKey){
            left++;
        }
        swap(arr, left, right);
    }
    return left;
}

function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
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
    console.log(fn(arr, 0, arr.length-1));
    var t2 = new Date().getTime();
    return (t2 - t1) + 'ms';
}
console.log(useTime(quickSort, getManyRandomNumber(100000, 1, 10000)))
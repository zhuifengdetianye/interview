function mergeSort(arr){
    var len = arr.length;
    if(len < 2){
        return arr;
    }
    var middle = Math.floor(len/2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    var result = [];
    while(left.length>0 && right.length>0){
        if(left[0] > right[0]){
            result.push(right.shift());
        }else{
            result.push(left.shift());
        }
    }
    while(right.length){
        result.push(right.shift());
    }
    while(left.length){
        result.push(left.shift());
    }

    return result;
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
    console.log(fn(arr));
    var t2 = new Date().getTime();
    return (t2 - t1) + 'ms';
}
console.log(useTime(mergeSort, getManyRandomNumber(10000, 1, 10000)))
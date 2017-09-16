//二分查找（非递归）
function binarySearch1(arr, val){
    //设置low和high
    var low = 0,
        high = arr.length - 1;

    //找到中间节点
    while(high >= low){
        var mid = parseInt((low + high)/2);
        if(val === arr[mid]){
            return mid;
        }else if(val > arr[mid]){
            low = mid + 1;
        }else if(val < arr[mid]){
            high = mid - 1;
        }else{
            return -1;
        }
    }
}

var arr = [1, 3, 5, 17, 55, 57, 66, 88];
console.log(binarySearch1(arr, 55));
//二分查找（递归）
function binarySearch(low, high, arr, val) {
    //递归的限制条件
    var mid = parseInt((low + high)/2);

    //不是在这里返回下标
    if(low > high){
        return -1; 
    }
    
    if(val > arr[mid]){
        return binarySearch(mid+1, high, arr, val)
    }else if(val < arr[mid]){
        return binarySearch(low, mid-1, arr, val)
    }else{
        return mid;
    }
}
console.log(binarySearch(0, arr.length-1, arr, 55));
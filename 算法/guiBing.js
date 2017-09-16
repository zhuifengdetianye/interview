//归并排序
function mergeSort(arr) {
    if(arr.length == 1) {return arr;}
    
    //计算中间点
    var center = Math.floor(arr.length/2);

    //将数组分成两部分
    var arr_left = arr.slice(0, center);
    var arr_right = arr.slice(center);

    //排序
    return sort(mergeSort(arr_left), mergeSort(arr_right));
}

//排序
function sort(arr1, arr2) {
    var result = [];
    while(arr1.length > 0 && arr2.length > 0){
        if(arr1[0] > arr2[0]){
            result.push(arr1.shift());
        }else{
            result.push(arr2.shift());
        }
    }

    return result.concat(arr1, arr2);
}

//var arr = [5, 30, 12, -9, 88, 66, 100];
var arr = [0, -5, 1, 1, 3]
console.log(mergeSort(arr));
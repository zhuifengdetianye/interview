//数组去重

//利用ES6的set
function unique1(arr){
    const set = new Set(arr);
    return [...set];
}


//最基本的去重方法
//思路：定义一个新数组，并存放原数组的第一个元素，然后将元素组一一和新数组的元素对比，若不同则存放在新数组中。
function unique(arr){
　　var res = [arr[0]];
　　for(var i=1;i<arr.length;i++){
　　　　var repeat = false;
　　　　for(var j=0;j<res.length;j++){
　　　　　　if(arr[i] == res[j]){
　　　　　　　　repeat = true;
　　　　　　　　break;
　　　　　　}
　　　　}
　　　　if(!repeat){
　　　　　　res.push(arr[i]);
　　　　}
　　}
　　return res;
}

//对象键值对法（推荐）
function unique(arr){
    var a = [];
    var b = {};
    for(var i = 0; i < arr.length; i++){
        if(!b[arr[i]]){
            a.push(arr[i]);
            b[arr[i]] = 1;
        }
    }
    return a;
}
var a = ['taobao', 'baidu', 'ali', 'tencent', 'baidu', 'ali'];
console.log(unique1(a));

//先排序在去重
//思路：先将原数组排序，在与相邻的进行比较，如果不同则存入新数组
function unique(arr){
　　var arr2 = arr.sort();
　　var res = [arr2[0]];
　　for(var i=1;i<arr2.length;i++){
　　　　if(arr2[i] !== res[res.length-1]){
　　　　　　res.push(arr2[i]);
　　　　}
　　}
　　return res;
}

//利用下标查询
function unique(arr){
　　var newArr = [arr[0]];
　　 for(var i=1;i<arr.length;i++){
　　　　if(newArr.indexOf(arr[i]) == -1){
        　　 newArr.push(arr[i]);
　　  }
    }
    return newArr;
}


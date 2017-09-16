//数组去重
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
console.log(unique(a));
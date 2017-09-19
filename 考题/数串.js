var arr = ['12', '123'];
//sort在原数组上排序，不生成副本
function shuChuan(arr){
    arr.sort(sortFun)
    return arr.join('');
}
//如果a在b之前返回一个小于0的数，b在a之前的话返回一个大于0的数
function sortFun(a, b){
    if(a+b < b+a){
        return 1;
    }else{
        return -1;
    }
}
console.log(shuChuan(arr));

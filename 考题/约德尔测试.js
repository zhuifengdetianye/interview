function YDEceishi(a, b){
    var reg = /[0-9a-zA-Z]/;
    var arr = [];
    var num = 0;
    for(var i = 0; i < a.length; i++){
        if(reg.test(a[i])){
            arr.push(1);
        }else{
            arr.push(0);
        }
    }

    for(var j = 0; j < arr.length; j++){
        if(arr[j] == b[j]){
            num++;
        }
    }
    //toFixed保留两位小数
    return (num/arr.length * 100).toFixed(2) + '%';
}
var a = '@!%12dgsa';
var b = '010111100';
console.log(YDEceishi(a, b));
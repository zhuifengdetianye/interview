/*
var line1 = read_line().split(' ');
var a = parseInt(line1[0]);
var b = parseInt(line1[1]);
//使用前定义
var str='';
//循环取出多行输入
while(line = read_line()){
    str += line;
    c = str.trim().split(' ');
}
for(var i = 0; i < c.length; i++){
    c[i] = parseInt(c[i]);
}
print(LD(a, b, c));
*/
/*
a:路灯数目
b:街道长度
c:路灯坐标
 */
function LD(a, b, c){
    var arr, distance = 0;
    //快速排序
    arr = quickSort(c);
    for(var i = 1; i <= arr.length; i++){
        if(arr[i] - arr[i-1] > distance){
            distance = arr[i] - arr[i-1];
        }
    }
    distance = Math.max(distance/2, arr[0], b-arr[arr.length-1]);
    return (distance).toFixed(2);
}
function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    var center = Math.floor(arr.length/2);
    var centerVal = arr.splice(center,1)[0];
    var left = [];
    var right = [];
    
    for(var i = 0; i < arr.length; i++ ){
        if(arr[i] > centerVal){
            right.push(arr[i]);
        }else if(arr[i] < centerVal){
            left.push(arr[i]);
        }
    }

    return quickSort(left).concat([centerVal],quickSort(right));
}
var a = 2;
var b = 2;
var c = [2, 5];
console.log(LD(a, b, c))
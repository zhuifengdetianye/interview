/*
//v8
var line;
while(line = readline()){
    var arr = line.split(' ');
    var a = parseInt(arr[0]);
    var b = parseInt(arr[1]);
    print(getSum(a, b));
}
*/
function getSum(a, b){
    var num = a;
    var sum = a;
    for(var i=0; i<b-1; i++){
        //toFixed将其转换为了字符串
        num = Math.sqrt(num);
        sum += num;
    }
    return sum.toFixed(2);
}
console.log(getSum(4768, 398))
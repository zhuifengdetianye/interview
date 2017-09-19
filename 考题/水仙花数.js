/*
//v8
var line;
while(line = readline()){
    var arr1 = line.split(' ');
    var start = parseInt(arr1[0]);
    var end = parseInt(arr1[1]);
    narcissusNumber(start, end);
}
*/
function narcissusNumber(start, end){
    var arr = [];
    for(var i=start; i<=end; i++){
        var str = i.toString();
        var g = str[2];
        var s = str[1];
        var b = str[0];
        var sum = g*g*g + s*s*s + b*b*b;
        if(sum == i){
           arr.push(i);
        }
    }
    if(arr.length){
        console.log(arr.join(' '));
    }else{
        console.log('no');
    }
    
}
narcissusNumber(300, 380);
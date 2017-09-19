function kangarooAcrossRiver(num ,arr){
    var flag = 0;
    var i = 0;
    while(flag < num){
        if(arr[flag]>0){
            flag += arr[flag];
            i++;
        }else{
            return -1;
        }
    }
    return i;
}
var arr=[3 ,6 ,6 ,6 ,3 ,8 ,9 ,8 ,5 ,2 ,9 ,7 ,3 ,6 ,5 ,4 ,2 ,3 ,6 ,9 ,9 ,8 ,6 ,4 ,1 ,0 ,4 ,4 ,8 ,9 ,3 ,6 ,0 ,7 ,8 ,1 ,1 ,8 ,4];
var num = 39;

// var arr=[2,1,1,2,0,1];
// var num = 6;
console.log(kangarooAcrossRiver(num ,arr))
/*
var num, arr, line;
while(line = readline()){
    num = parseInt(line);
    arr = readline().split(' ');
}
arr.forEach(function(e){
    e = parseInt(e);
});
print(kangarooAcrossRiver(num ,arr));
function kangarooAcrossRiver(num ,arr){
    var flag = 0;
    var i = 0;
    while(flag < num){
        if(arr[flag]>0){
            flag += arr[flag];
            i++;
        }else{
            return -1;
        }
    }
    return i;
}
*/

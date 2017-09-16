var num = parseInt(read_line());
var line = read_line();
var arr = line.split(' ');
arr.map(function(value,index,arr){
     arr[index] = parseInt(value);
})
function f(num, arr){
    var f = 0, x = 0, top=[], tail=[];
    
    if(num == 1 || (num == 2 && arr[0] > arr[1])){
        return 'yes';
    }else{
        for(var i = 0; i < num-1; i++){
            if(arr[i] > arr[i+1] && f == 0){
                x++;
                f = 1;
                i == 0 ? top.push(arr[0]) : top.push(arr[i-1]);
                tail.push(arr[i]);
            }else if(arr[i] < arr[i+1] && f == 1 && x == 1){
                f = 0;
                top.push(arr[i]);
                tail.push(arr[i+1]);
            }
        }
    }
    if((x == 1 && top[0] < top[1] && tail[0] < tail[1] )|| x == 0){
        return 'yes';
    }else{
        return 'no';
    }
}
print(f(num, arr));
/*
function f(arr, arr1){
    var tmp1, tmp2, flag=false, a, b;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > arr[i+1]){
            tmp1 = i;
            a = arr[i];
            break;
        }
    }
    for(var i = arr.length-1; i > 0; i--){
        if(arr[i] < arr[i-1]){
            tmp2 = i;
            b = arr[i];
            break;
        } 
    }
    
    for(var i = tmp1; i <= tmp2-1; i++ ){
        if(arr[i] < arr[i+1]){
            flag = true;
            break;
        }
    }
    
    
    arr1 = quickSort(arr1);
    if(flag){
        print('no');
    }else{
        if(arr1[tmp2] == a && arr1[tmp1] == b){
            print('yes');
        }else{
            print('no');
        }
    }
    
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
        if(arr[i] >= centerVal){
            right.push(arr[i]);
        }else{
            left.push(arr[i]);
        }
    }

    return quickSort(left).concat([centerVal],quickSort(right));
}
f(arr,arr1);
*/
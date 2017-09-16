function delMinWord(str){
    var arr1 = str.split('');
    var arr = [];
    var obj = {};
    var min = 0;
    for(var i = 0; i < arr1.length; i++){
        if(obj[arr1[i]]){
            obj[arr1[i]]++;
        }else{
             obj[arr1[i]] = 1;
        }
    }

    for(var i in obj){
        if(min == 0){
            min = obj[i];
            arr.push(i);
        }else{
            if(min > obj[i]){
                arr.pop();
                arr.push(i);
                min = obj[i];
            }else if(min == obj[i]){
                arr.push(i);
            }
        }
    }
    
    str = str.split('').sort().join('');
    
    for(var i = 0; i < arr.length; i++){
        str = str.split(arr[i]).join('');
    }
    
    return str;
}
var str = 'aabbccddddeeffaccgggaad';
console.log(delMinWord(str))
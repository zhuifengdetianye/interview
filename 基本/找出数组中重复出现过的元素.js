/*如果数组是数字*/
function duplicates(arr) {
    var arr1 = [];
    var obj = {};
    for(var i = 0; i < arr.length; i++){
        if(!obj['"'+arr[i]+'"']){
            obj['"'+arr[i]+'"'] = 1;
        }else if(obj['"'+arr[i]+'"'] == 1){
            arr1.push(arr[i]);
            obj['"'+arr[i]+'"']++;
        }else{
            obj['"'+arr[i]+'"']++;
        }
    }
    return arr1;
}

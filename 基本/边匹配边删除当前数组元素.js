function removeWithoutCopy(arr, item) {
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == item){
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}
function count(start, end) {
    console.log(start);
    var int = setInterval(function(){
        if(start <= end - 1){
            console.log(++start);
        }else{
            clearInterval(int);
        }
    }, 100);
    
    return {cancel:function(){clearInterval(int)}};
}
count(20, 100);
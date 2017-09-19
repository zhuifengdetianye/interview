//var str = 'ABCYDYE';
var str ='ATTMBQECPD';
function coloredJewelNecklace(str){
    var n = str.length;
    var reg = /[ABCDE]/;
    var str2 = str.concat(str); 
    for(var j=5; j<=n; j++){
        for(var i=0; i<n; i++){
            //是否有“ABCDE”
            if(reg.test(str[i])){   
               var str1 = str2.slice(i, (i+j));
               if(getAll(str1, 'ABCDE')){
                   return n-j;
               }
            }
        }
    }
}
function getAll(str1, str2){
    var flag = true;
    for(var i=0; i<str2.length; i++){
        if(str1.indexOf(str2[i]) == -1){
            return false;
        }
    }
    return flag;
}
console.log(coloredJewelNecklace(str));
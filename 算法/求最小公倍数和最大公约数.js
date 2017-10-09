/*
var dbList = [];

//两个数的最小公倍数
function gcd(a,b){
    var minNum = Math.min(a,b),maxNum = Math.max(a,b),i=minNum,vper=0;
    if(a ===0 || b===0){
        return maxNum;
    }

    for(;i<=maxNum;i++){
        vper = minNum * i;
        if(vper % maxNum === 0){
            return vper;
            break;
        }
    }
}

//求一个数组的最小公倍数
function gcds(arr){
    var onum = 0,i = 0,len = arr.length,midNum = 0;
    for(;i<len;i++){
        onum = Math.floor(arr[i]);//去掉小数
        midNum = gcd(midNum,onum);
    }
    return midNum;
}

console.log(gcds([2,5,8,21]))
*/
//函数功能：求N个数字的最大公约数和最小公倍数
//参数：数字集合（间隔符使用英文逗号, 如：16,24）
//调用方式：参照下方求两位数字和三位数字的最大公约数和最小公倍数案例
function getGCDLCM(str){
    var arr=eval("[" + str + "]");
    var max=Math.max.apply(null, arr);
    var min=Math.min.apply(null, arr);
    var GCDLCM=new Object(); //函数返回对象
    GCDLCM.str=str; //输入的数字集合
    GCDLCM.num=arr.length; //数字总个数
    var i,j,ifstr="";
    for(j=0;j<arr.length;j++){
        ifstr+=arr[j] + "<1";
        if(j<arr.length-1) ifstr+="||"
    }
    if(eval(ifstr)){
        GCDLCM.GCD=-1; //最大公约数
        GCDLCM.LCM=-1; //最小公倍数
        return GCDLCM;
    }
    //求最大公约数
    for(i=min;i>0;i--){
        ifstr="";
        for(j=0;j<arr.length;j++){
            ifstr+=arr[j] + "%" + i + "==0";
            if(j<arr.length-1) ifstr+="&&"
        }
        if(eval(ifstr)){
            GCDLCM.GCD=i; //最大公约数
            break;
        }
    }
    //求最小公倍数
    var n=1;
    for(j=0;j<arr.length;j++){ n=n*arr[j]; }
    for(i=max;i<=n;i++){
        ifstr="";
        for(j=0;j<arr.length;j++){
            ifstr+=i + "%" + arr[j] + "==0";
            if(j<arr.length-1) ifstr+="&&"
        }
        if(eval(ifstr)){
            GCDLCM.LCM=i; //最小公倍数
            break;
        }
    }
    return GCDLCM;
}
console.log(getGCDLCM("16,24,96"));
var arr = ['192.168.0.0/16', '192.168.59.211/32', '192.168.0.0/24', '172.24.96.17/32', '172.24.0.0/17'];
deleIp(arr)
function deleIp(arr){
    var arr1 = [];
    arr.forEach(function(e){
        arr1.push(fromIpToArea(e));
    });
    for(var i=0;i<arr1.length;i++){
        for(var j=0;j<arr1.length;j++){
            if(i!=j){
                if(isHasIt(arr1[i], arr1[j])){
                    arr1.splice(j, 1);
                    j--;
                    if(i>j){
                        i--;
                    }
                }
            }
            
        }
    }
    arr1.forEach(function(e){
        console.log(e.str)
    })
}
function fromIpToArea(str){
    var arr1 = str.split('/');
    var arr2 = arr1[0].split('.');
    var startIp = [];
    arr2.forEach(function(e){
        startIp.push(parseInt(e))
    });
    var n = parseInt(arr1[1]);
    var n0 = 32-n-24;
    var n1 = 32-n-16;
    var n2 = 32-n-8;
    var n3 = 32-n;
    var endIp = [];
    if(n0 > 0){
        endIp[0] = startIp[0] + getSum(n0);
        endIp[1] = 255;
        endIp[2] = 255;
        endIp[3] = 255;
    }else if(n1 > 0){
        endIp[0] = startIp[0];
        endIp[1] = startIp[1] + getSum(n1);
        endIp[2] = 255;
        endIp[3] = 255;
    }else if(n2 > 0){
        endIp[0] = startIp[0];
        endIp[1] = startIp[1];
        endIp[2] = startIp[2] + getSum(n2);
        endIp[3] = 255;
    }else if(n3 > 0){
        endIp[0] = startIp[0];
        endIp[1] = startIp[1];
        endIp[2] = startIp[2];
        endIp[3] = startIp[3] + getSum(n2);
    }else{
        endIp[0] = startIp[0];
        endIp[1] = startIp[1];
        endIp[2] = startIp[2];
        endIp[3] = startIp[3];
    }
    var obj = {};
    obj.str = str;
    obj.start = startIp;
    obj.end = endIp;
    return obj;
}
function getSum(n){
    var sum = 1;
    for(var i=1; i<n; i++){
        var ji=1;
        for(var j=0; j<i; j++){
            ji *= 2;
        }
        sum += ji;
    }
    return sum;
}
//是否包含
function isHasIt(obj1, obj2){
    for(var k=0;k<4;k++){
        if(obj1.start[k] > obj2.start[k] || obj1.end[k] < obj2.end[k]){
            return false;
        }
    }
    return true;
}
/**
 * 求两个数的最大公约数
 * @param {*} a 
 * @param {*} b 
 */
function gcd(a,b){      
    if (b == 0){ 
        return a;    
    }
    var r = parseInt(a % b) ;     
    return gcd(b, r); 
}
/**
 * 判断是否互质，最大公约数为1即互质（互素）
 * @param {*} m 
 * @param {*} n 
 */
function isPremire(m,n){
    var num1 = Math.max(m, n);
    var num2 = Math.min(m, n);
    var temp;
    while(num1%num2 != 0){
        temp = num2;
        num2 = num1%num2;
        num1 = temp;
    }
    return num2 == 1 ? true : false;
}
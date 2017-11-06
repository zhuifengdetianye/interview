function isPrime(n){                        //判断一个数是不是质数；然而在我的算法里面并没有用到
    for(var i=2;i<=Math.sqrt(n);i++){  
        if(n % i == 0){  
            return false;  
        }  
    }  
    return true;  
}  

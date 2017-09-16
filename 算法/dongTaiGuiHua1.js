/*
function LIS(arr){
    var arr1 = [];
    var len = 1;
    for(var i = 0; i < arr.length; i++){
        arr1[i] = 1;
        for(var j = 0; j < i; j++){
            if(arr[i] >= arr[j] && arr1[j] + 1 > arr1[i]){
                arr1[i] = arr1[j] + 1;
            }
        }
        if(arr1[i]>len){
            len = arr1[i];
        }
    }
    return len;
}
var arr = [5,3,4,8,6,7,10,-5,3,12,11,20];
console.log(LIS(arr));
*/
function minCoin(arr, total){
    var dp = [];
    dp[0] = 0;
    //我们假设存在1元的硬币，那么i元只需要i个1元硬币
    for(var i = 1; i <= total; i++){
        dp[i] = i;
    }

    for(var i = 1; i <= total; i++){
        for(var j = 0; j < 3; j++){
            if(i >= arr[j] && dp[i-arr[j]]+1 < dp[i]){
                dp[i] = dp[i - arr[j]] + 1;
            }
        }
    }
    return dp[total];
}
var arr = [1, 3, 5];
console.log(minCoin(arr, 21));

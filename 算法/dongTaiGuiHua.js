
var totalNum = parseInt(readline());
var valArr = readline().split(' ');
var lines = readline().split(' ');
var cha = lines[1];
var xuan = lines[0];
/*a:总人数，b:数组，每个人能力值，c:选择的人数，d:他们之间的差值*/
function getMax(a, b, c, d){
    //选人（能力值大且他们之间的差值小于d
    var arr = quickSort(b);
    var max = 1;
    for (var i = arr.length-1; i > arr.length - 1 - c; i--) {
        max *= arr[i];
    }
    return max;
}
function quickSort(arr){
    //如果数组<=1,则直接返回
    if(arr.length<=1){return arr;}
    var pivotIndex=Math.floor(arr.length/2);
    //找基准，并把基准从原数组删除
    var pivot=arr.splice(pivotIndex,1)[0];
    //定义左右数组
    var left=[];
    var right=[];

    //比基准小的放在left，比基准大的放在right
    for(var i=0;i<arr.length;i++){
        if(arr[i]<=pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    //递归
    return quickSort(left).concat([pivot],quickSort(right));
}
print(getMax(totalNum, valArr, xuan, cha))
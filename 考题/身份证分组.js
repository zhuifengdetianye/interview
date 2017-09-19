function groupId(str){
    //去除空格
    str = str.replace(' ','');
    var n = str.length;
    return n>14&&n<19 ? str.slice(0,6)+' '+str.slice(6,14)+' '+str.slice(14) : n>6 ? str.slice(0,6)+' '+str.slice(6) : str;
}
var str = '5021041988033084';
console.log(groupId(str));
/*
//牛客v8
var arr = [];
var line;
while(line = readline()){
    arr.push(line);
}
arr.forEach(function(e,i,a){
    print(sentenceReverse(e));
})
*/
function sentenceReverse(str){
    var arr = trim(str).split(' ');
    arr.reverse();
    return arr.join(' ');
}
function trim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}
var str = 'hello xiao mi';
console.log(sentenceReverse(str))
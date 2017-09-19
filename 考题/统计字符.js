/*
//v8
var str = '';
var line;
var arr = [];
while(line = readline()){
    str += line.replace(/[^a-zA-Z]/g, '');
}

print(statisticalCharacters(str))
*/
function statisticalCharacters(str){
    var obj = {};
    for(var i=0; i<str.length; i++){
        if(obj[str[i]]){
            obj[str[i]]++;
            if(obj[str[i]] == 3){
                return str[i];
            }
        }else{
            obj[str[i]] = 1;
        }

    }
}
var str = 'Have you ever gone shopping and'
console.log(statisticalCharacters(str));

//v8
var line;
while(line = read_line()){
    n = parseInt(line);
    print(f(n))
}
function f(n){
    var a = 2;
    var b = 2;
    var c = 0;
    while(a < n){
        b++;
        a = a + b;
        c = c + 2;
    }
    return n-c;
}
//node
var cmd = require('node-stdio');
var line;
while(line = cmd.readInt()){
    cmd.print(f(n));
}
function f(n){
    var a = 2;
    var b = 2;
    var c = 0;
    while(a < n){
        b++;
        a = a + b;
        c = c + 2;
    }
    return n-c;
}
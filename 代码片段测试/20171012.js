var a = 10;
function foo(){
    console.log(a);
}
var obj = {
    a: 5,
    out: function(fn) {
        fn();
        arguments[0]();
    }
};
obj.out(foo);
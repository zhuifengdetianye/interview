function inheritObject(o){
    function F(){}
    F.prototype = o;
    return new F();
}

var book = {
    name: 'js',
    alikeBook: ['css book', 'html book'] 
}

function createBook(obj){
    var o = new inheritObject(obj);
    o.getName = function(){
        console.log(name);
    };
    return o;
}

var book1 = new createBook(book);
console.log(book1.name);
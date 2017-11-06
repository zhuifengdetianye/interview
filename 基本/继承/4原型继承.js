function inheritObject(o){
    function F(){}
    F.prototype = o;
    return new F();
}

var book = {
    name: 'js book',
    alikeBook: ['css book', 'html book']
}

var book1 = new inheritObject(book);
console.log(book1.alikeBook)
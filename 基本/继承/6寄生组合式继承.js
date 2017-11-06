function inheritObject(o){
    function F(){}
    F.prototype = o;
    return new F();
}
function inheritPrototype(subClass, superClass){
    var p = inheritObject(superClass.prototype);
    p.constructor = subClass;
    subClass.prototype = p;
}
function SuperClass(name){
    this.name = name;
    this.colors = ['red', 'blue'];
}
function SubClass(name, time){
    SuperClass.call(this, name);
    this.time = time;
}

inheritPrototype(SubClass, SuperClass);
var instance1 = new SubClass('dog', 2014);
console.log(instance1.name);
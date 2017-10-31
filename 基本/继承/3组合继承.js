function SuperClass(name){
    this.name = name;
}

function SubClass(name, time){
    SuperClass.call(this, name);  //类的属性方法比原型的属性方法优先级高
    this.time = time;
}
SubClass.prototype = new SuperClass('pig');  //类的属性方法比原型的属性方法优先级高

var instance1 = new SubClass('dog', 2014);
console.log(instance1.name);
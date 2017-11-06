function SuperClass(name){
    this.name = name;
}
function SubClass(){}
SubClass.prototype = new SuperClass('dog');

//在实例化子类的时候无法向父类传递参数
var instance1 = new SubClass();
console.log(instance1.name)
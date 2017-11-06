function SuperClass(name){
    this.name = name;
}

function SubClass(name, time){
    SuperClass.call(this, name);
    this.time = time;
}

var instance1 = new SubClass('dog', 2014);

console.log(instance1.name);
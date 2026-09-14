// TS 抽象类 abstract 练习
(function(){
// 以abstract开头的类是抽象类
// 抽象类和其他类区别不大，只是不能用来创建对象
// 抽象类是专门用来被继承的类
// 抽象类中可以添加抽象方法
abstract class Animal{
    name: string;
    constructor(name:string){
        this.name = name;
    }
    // 定义一个抽象方法
    // 抽象方法使用abstract开头，没有方法体
    // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
    abstract sayHello():void;
}

class Dog extends Animal{
    sayHello() {
        // 在类的方法中 super就表示当前类的父类
        console.log('wqwqwqw');
    }
}

class Cat extends Animal{
    sayHello(): void {
        console.log('mmm');
    }
}

const dog = new Dog('w');
dog.sayHello();
})();

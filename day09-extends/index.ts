// TS super关键字 继承练习
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHello() {
    console.log('hello')
  }
}

class Dog extends Animal {
  age: number;
  constructor(name: string, age: number) {
    // 子类写构造函数，必须用super调用父类构造
    super(name);
    this.age = age;
  }

  sayHello() {
    // 方法内 super代表父类，可以调用父类方法
    super.sayHello();
    console.log(`我是${this.name}，今年${this.age}岁`);
  }
}

const dog = new Dog('w',33);
dog.sayHello();

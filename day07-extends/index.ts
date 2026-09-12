// TS 类继承练习
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`你好，我是${this.name}，今年${this.age}岁`);
  }
}

// Student 子类继承 Person 父类，使用 extends
class Student extends Person {
  // 子类独有的属性
  studentId: number;

  // 子类构造函数必须调用 super()，执行父类构造
  constructor(name: string, age: number, studentId: number) {
    super(name, age);
    this.studentId = studentId;
  }

  // 子类扩展新方法
  study() {
    console.log(`${this.name}正在学习，学号：${this.studentId}`);
  }

  // 方法重写：覆盖父类同名方法
  sayHello() {
    super.sayHello(); // 调用父类原有方法
    console.log(`我是学生，学号${this.studentId}`);
  }
}

// 实例测试
const s1 = new Student("小明", 16, 2026001);
s1.sayHello();
s1.study();

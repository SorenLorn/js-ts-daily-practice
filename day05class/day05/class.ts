// 使用class关键字来定义一个类
class Person {
  // 定义实例只读属性，每个实例都会拥有这份属性
  readonly name: string = 'ssssss';
  // 实例普通属性
  gender: string = '男';

  // 在属性前使用static关键字可以定义类属性（静态属性），仅属于Person类
  static readonly age: number = 18;
  static desc: string = '人类';

  // 实例方法：需要实例调用
  sayName() {
    console.log(`我的名字：${this.name}`);
  }

  sayGender() {
    console.log(`我的性别：${this.gender}`);
  }

  // 如果加了static开头则方法就是类方法(静态方法)，可以直接通过类去调用
  static sayHello(){
    console.log('耍起');
    console.log(`静态属性age：${this.age}`);
  }

  static showDesc() {
    console.log(`物种描述：${this.desc}`);
  }
}

const per = new Person();
const per2 = new Person();
per2.gender = '女';

console.log(per.name);
console.log(per.gender);
per.sayName();
per.sayGender();

console.log(per2.name);
console.log(per2.gender);
per2.sayName();
per2.sayGender();

// per.name = 'tom'; // readonly只读，无法修改，取消注释会报错
console.log(Person.age);
console.log(Person.desc);

Person.sayHello();
Person.showDesc();

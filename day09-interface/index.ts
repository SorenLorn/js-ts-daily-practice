// 接口 interface：定义对象的结构，规定属性、方法的类型
interface User {
  name: string;
  age: number;
  // 可选属性 ?
  email?: string;
  // 只读属性，创建后不能修改
  readonly id: number;
  sayHi(): void;
}

// 实现接口
const u1: User = {
  name: "小明",
  age: 18,
  id: 1001,
  sayHi() {
    console.log(`你好，我是${this.name}`);
  }
}
u1.sayHi()

// 接口继承（接口可以继承多个接口）
interface Animal {
  name: string
}
interface Dog extends Animal {
  bark(): void
}

const dog: Dog = {
  name: "旺财",
  bark() {
    console.log("汪汪汪")
  }
}
dog.bark()

// 接口定义函数类型
interface CalcFunc {
  (a: number, b: number): number
}
const add: CalcFunc = (x, y) => x + y
console.log(add(10,20))

// 接口合并：同名接口会自动合并
interface Person {
  name:string
}
interface Person {
  age:number
}
const p:Person = {name:"小红",age:20}
console.log(p)

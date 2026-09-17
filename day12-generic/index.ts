// 泛型练习代码
// 泛型：不预先指定类型，使用时再传入类型，实现代码复用
function getValue<T>(arg: T): T {
  return arg;
}

// 调用泛型函数
const str = getValue<string>("hello ts");
const num = getValue<number>(666);
console.log(str, num);

// 泛型约束：限制传入类型必须有length属性
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}
console.log(getLength("abc123"));
console.log(getLength([1,2,3]));

// 泛型接口
interface IBox<T> {
  value: T
}
const box1: IBox<string> = { value: "泛型盒子" };
const box2: IBox<number> = { value: 999 };

// 类中的泛型
class Container<T> {
  content: T
  constructor(content: T) {
    this.content = content
  }
  getContent(): T {
    return this.content
  }
}
const c1 = new Container<string>("类泛型测试");
console.log(c1.getContent());

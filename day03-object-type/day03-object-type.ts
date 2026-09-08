//object表示一个js对象
let a : object;
a = {}; // ✅ 正确
a = function(){}; // ✅ 正确


//{} 用来表示一个对象类型，里面可以指定对象的属性和属性的类型
// 语法：“{属性名: 属性类型, 属性名: 属性类型}”
let f: {name: string, age: number};
f = {name: '张三', age: 18}; // ✅ 正确 
// f = {name: '张三'}; // ❌ 错误，缺少age属性
// f = {name: '张三', age: '18'}; // ❌ 错误，age属性的类型应该是number

//在对象类型中，属性名后面加上?表示该属性是可选的
let b : {name: string, age?: number}; // age属性是可选的
b = {name: '张三'}; // ✅ 正确

// [propName: string]: any表示可以有任意数量的属性，属性名是字符串类型，属性值是任意类型
let c : {name: string, [propName: string]: any}; 
c = {name: '张三', age: 18, gender: '男'};

// 函数类型，表示一个接收两个number类型参数并返回一个number类型的函数
let d : (a: number, b: number) => number; 
d = function(x: number, y: number): number {
  return x + y;
}

//数组的类型声明：
//类型[]  Array<类型>  
let e : string[]; // 表示一个字符串数组
e = ['a', 'b', 'c']; // ✅ 正确
// e = [1, 2, 3]; // ❌ 错误，数组元素的类型应该是string
let g : Array<number>; // 表示一个数字数组
g = [1, 2, 3]; // ✅ 正确
// g = ['a', 'b', 'c']; // ❌ 错误，数组元素的类型应该是number

// 元组类型，表示一个已知元素数量和类型的数组
// 元组就是一个固定长度的数组，每个元素的类型可以不同
let h : [string, number];
h = ['hello', 10]; // ✅ 正确
// h = [10, 'hello']; // ❌ 错误，元组的第一个元素应该是string类型，第二个元素应该是number类型
// h = ['hello', 10, true]; // ❌ 错误，元组的长度应该是2

//枚举类型，表示一组命名的常量
// enum 枚举名 {枚举成员1, 枚举成员2, ...}
enum Gender {
  Male = 0,
  Female = 1
}
let i : { name: string, gender: Gender }; 

 i = { 
    name: '张三', 
    gender: Gender.Male 
}; //

console.log(i.gender === Gender.Male); // true  

//& 表示同时满足多个类型（交叉类型）
//交叉类型就是将多个类型合并为一个类型，表示同时满足多个类型的要求
let j : {name: string} & {age: number};
j = {name: '张三', age: 18}; // ✅ 正确
// j = {name: '张三'}; // ❌ 错误，缺少age属性
// j = {age: 18}; // ❌ 错误，缺少name属性

//类型的别名，使用type关键字来定义一个类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
let k : myType;
let l : myType;
k = 1; // ✅ 正确
k = 2; // ✅ 正确
// k = 6; // ❌ 错误，k的类型只能是1、2、3、4、5中的一个



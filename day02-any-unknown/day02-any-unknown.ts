//可以使用字面量进行类型声明

let a: 10;
a = 10; // ✅ 正确
// a = 20; // ❌ 错误，只能赋值为10

//使用 | 来连接多个类型（联合类型）
//可以使用联合类型来表示多个类型的组合
let b: 'male' | 'female';
b = 'male'; // ✅ 正确
b = 'female'; // ✅ 正确
// b = 'other'; // ❌ 错误，只能赋值为'male'或'female'

//
let c: string | number; 
c = 'hello'; // ✅ 正确
c = 10; // ✅ 正确
// c = true; // ❌ 错误，只能赋值为string或number


//可以使用any类型来表示任意类型，相当于关闭了TS的类型检测
// 使用ts时，不建议使用any类型，因为它会失去TS的类型检查功能，容易导致代码出错
//声明变量如果没有指定类型，TS会自动推断变量的类型为any（隐式any）
let d: any;
d = 10; // ✅ 正确
d = 'hello'; // ✅ 正确
d = true; // ✅ 正确

// unknown类型表示未知类型的值，它是TypeScript中所有类型的父类型
let e: unknown;
e = 10;
e = 'hello';
// e = true; // ✅ 正确

let s: string ;
// s = e; // ❌ 错误，不能将unknown类型赋值给string类型
// unknown 实际上是一个类型安全的any类型，它可以赋值给任何类型，但是不能直接赋值给其他类型，需要进行类型断言或者类型检查。
// unknown类型的值不能直接赋值给其他类型的变量，需要进行类型断言或者类型检查。

if (typeof e === 'string') {
  s = e; // ✅ 正确，经过类型检查后，e的类型被缩小为string类型
}
//类型断言
s = e as string; // ✅ 正确，使用类型断言将unknown类型转换为string类型
s = <string>e; // ✅ 正确，使用类型断言将unknown类型转换为string类型

// void类型表示没有任何类型，一般用于函数没有返回值的情况
function fn() : void {
  return ;
}

// never类型表示永远不会有返回值的类型，一般用于函数抛出异常或者死循环的情况
function fn2() : never {
   throw new Error('error');
}













export {}

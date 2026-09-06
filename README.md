   day01 TS基础类型
 
 1.类型声明
TS的核心特点：可以给变量、函数参数指定类型。
编译器会做类型检查，赋值类型不匹配直接报错，规避JS运行时错误。

两种声明语法：

let 变量: 类型;                // 先声明，后赋值
let 变量: 类型 = 初始值;       // 声明同时赋值

函数也可以标记参数类型、返回值类型

function add(a: number, b: number): number {
  return a + b
}

  2. 自动类型推断

变量声明的时候直接赋值，TS 会自动猜出类型，可以省略手写类型。
let count = 10; // TS自动识别为 number，不用写 :number

  3. 常见基础类型

表格

| 类型 | 含义 |
| --- | --- |
| number | 数字，整数、小数 |
| string | 字符串，引号包裹文本 |
| boolean | 布尔，只有 true /false |

  4. 练习示例代码

完整可运行代码：`day01-base.ts`

```

  ② 代码文件：`day01-base/day01-base.ts`
复制全部粘贴到ts文件编辑框
```typescript
// day01 TS基础类型练习

// number 数字类型
let age: number = 18;
let score: number = 95.5;

// string 字符串类型
let username: string = "Soren";

// boolean 布尔类型
let isStudy: boolean = true;

// 自动类型推断，不写类型注解
let height = 172;

console.log("age:", age);
console.log("score:", score);
console.log("username:", username);
console.log("是否在学习TS：", isStudy);
console.log("身高：", height);

// 函数带类型示例
function add(a: number, b: number): number {
    return a + b
}
let res = add(10, 20)
console.log("add计算结果", res)
```

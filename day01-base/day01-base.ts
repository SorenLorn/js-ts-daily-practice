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

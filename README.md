 #  day01 TS基础类型
 
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


# day02 常见类型

```

# day02 字面量、联合类型、any、unknown、void、never

## 1.字面量类型
直接写具体的值作为类型，变量**只能被赋值为指定字面量**，不能赋予其他值。
```ts
let a: 10;
a = 10;   // ✅正确
// a = 20; // ❌错误，只能赋值为10
```

## 2. 联合类型 `|`

使用`|`连接多个类型，表示可以是多个类型其中之一。

### 字面量联合

```
let b: 'male' | 'female';
b = 'male';   // ✅正确
b = 'female'; // ✅正确
// b = 'other'; // ❌错误，只能是'male' / 'female'
```

### 基础类型联合

```
let c: string | number;
c = 'hello'; // ✅正确
c = 10;      // ✅正确
// c = true;  // ❌错误，只能是string或number
```

## 3.any 任意类型

`any`会关闭 TS 类型检测，可以接收任意类型的值。

> 
> ⚠️不推荐频繁使用 any，会丢失 TS 类型保护，退化成普通 JS。
> 变量不写类型注解，TS 推断不出类型时，会隐式推导为`any`。

```
let d: any;
d = 10;
d = 'hello';
d = true;
```

## 4.unknown 未知类型

安全版的 any，可以接收任意类型的值；
**不能直接赋值给其他类型变量，不能直接调用方法**。
想要赋值，必须做**类型判断（类型缩小）** 或者**类型断言**。

```
let e: unknown;
e = 10;
e = 'hello';
e = true;

let s: string;
// s = e; // ❌报错，unknown不能直接赋值给string
```

### 方式 1：类型判断（类型缩小）

```
if (typeof e === 'string') {
  s = e; // ✅类型检查通过，e被缩小为string
}
```

### 方式 2：类型断言 as / <>

告诉 TS，你手动确定这个变量是什么类型

```
s = e as string;      // ✅ as语法，推荐
s = <string>e;        // ✅尖括号语法，部分框架环境不推荐
```

> 
> any vs unknown 对比
> | 类型 | 接收任意值 | 直接赋值给其他变量 | 安全性 |
> |---|---|---|---|
> |any|✅|✅| 不安全，关闭校验 |
> |unknown|✅|❌| 安全，必须做类型处理 |

## 5.void 空类型

代表**没有返回值**，专门用于函数。
函数不写 return /return 无值，返回类型就是`void`。

```
function fn(): void {
  return;
}
```

## 6.never 永不返回类型

代表函数永远不会有正常返回：抛出异常、死循环。

```
function fn2(): never {
  throw new Error('error');
}
```

完整练习代码：[day02-any-unknown/day02-any-unknown.ts](./day02-any-unknown/day02-any-unknown.ts)

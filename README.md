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


---
## day03 对象、函数、数组、元组、枚举、交叉类型、类型别名

### 1. object 对象类型
`object` 代表JS对象，普通对象、函数都可以赋值给 `object`
```typescript
let a : object;
a = {};
a = function(){};
```

#### 对象字面量语法 `{属性名: 类型}`
严格限定对象内部每一个属性的类型
```typescript
let f: {name: string, age: number};
f = {name: '张三', age: 18};
// f = {name: '张三'}; // 报错：缺少age属性
// f = {name: '张三', age: '18'}; // 报错：age类型应为number
```

#### 可选属性 `?`
属性后面加 `?`，代表该属性可以省略不写
```typescript
let b : {name: string, age?: number};
b = {name: '张三'};
```

#### 任意数量属性 `[propName:string]:any`
允许对象扩展任意自定义属性，属性名为字符串，值为任意类型
```typescript
let c : {name: string, [propName: string]: any};
c = {name: '张三', age: 18, gender: '男'};
```

### 2. 函数类型
定义函数参数、返回值类型，语法：`(参数:类型, 参数:类型) => 返回值类型`
```typescript
let d : (a: number, b: number) => number;
d = function(x: number, y: number): number {
    return x + y;
}
```

### 3. 数组类型
两种写法：`类型[]` / `Array<类型>`
```typescript
// 字符串数组
let e : string[];
e = ['a','b','c'];
// e = [1,2,3]; // 报错，只能存放字符串

// 数字数组
let g : Array<number>;
g = [1,2,3];
// g = ['a','b']; // 报错，只能存放数字
```

### 4. 元组类型 Tuple
固定长度，每个下标位置类型固定的数组
```typescript
let h : [string, number];
h = ['hello', 10];
// h = [10,'hello']; // 报错，位置类型不匹配
// h = ['hello',10,true]; // 报错，数组长度只能为2
```

### 5. 枚举 enum
定义一组命名常量，直接调用枚举成员
```typescript
enum Gender {
    Male = 0,
    Female = 1
}
let i : { name: string, gender: Gender };
i = {
    name: '张三',
    gender: Gender.Male
}
console.log(i.gender === Gender.Male); // true
```

### 6. 交叉类型 `&`
`&` 代表同时满足多个类型，对象必须具备两边全部属性
```typescript
let j : {name: string} & {age: number};
j = {name: '张三', age: 18};
// j = {name:'张三'}; // 报错，缺少age属性
// j = {age:18}; // 报错，缺少name属性
```

### 7. 类型别名 type
`type` 给一套类型起别名，简化重复的类型书写
```typescript
type myType = 1 | 2 | 3 | 4 | 5;
let k : myType;
let l : myType;
k = 1;
k = 2;
// k = 6; // 报错，仅允许1‑5
```

完整练习代码：[day03-object-type/day03-object-type.ts](./day03-object-type/day03-object-type.ts)
---
---
## day04 tsconfig.json 配置文件
### 1. tsconfig.json 简介
`tsconfig.json` 是TypeScript项目的配置文件，放在项目根目录。存在这个文件，代表当前文件夹是TS项目根目录。执行`tsc`命令会自动读取该配置，按照规则编译TS代码。

### 2. 顶层配置字段
#### include
指定需要编译的文件/文件夹
- `**`：匹配任意层级子目录
- `*`：匹配任意文件名
- `?`：匹配任意单个字符
```json
"include": [
    "src/**/*"
]
```

#### exclude
指定不需要编译的文件/文件夹；手动填写后会覆盖默认排除列表
```json
"exclude": [
    "node_modules",
    "dist",
    "./chapter1/day01_hello/**/*"
]
```

#### files
手动指定需要编译的文件列表，优先级最高，适合少量文件场景
```json
"files": [
    "src/index.ts"
]
```

### 3. compilerOptions 编译选项（核心）
```json
"compilerOptions": {
    // target：编译输出的JS版本
    "target": "ESNext",
    // module：编译后模块化方案
    "module": "CommonJS",
    // lib：编译使用内置库
    "lib": ["DOM", "DOM.Iterable", "ES5", "ScriptHost", "ES2015"],
    // outDir：编译输出文件夹
    "outDir": "./dist",
    // outFile：全部代码合并为单个js文件（AMD/System模块可用）
    "outFile": "./dist/index.js",
    // 是否允许编译js文件
    "allowJs": false,
    // 是否检查js语法
    "checkJs": false,
    // 是否删除注释
    "removeComments":false,
    // noEmit：不输出编译后的js
    "noEmit": false,
    // 代码报错时不生成编译文件
    "noEmitOnError": false,
    // strict：严格模式总开关
    "strict": true,
    // alwaysStrict：编译后js启用严格模式
    "alwaysStrict":true,
    // 禁止隐式any
    "noImplicitAny":true,
    // 不允许模糊this类型
    "noImplicitThis":true,
    // 严格空值检查
    "strictNullChecks":true
}

```
完整练习代码：day04 tsconfig/day04 tsconfig.json
---

# Day05 TS 类 Class
---
### 一、核心知识点
- `class`：用于定义类，类可以通过`new`创建实例对象。
- **实例属性 / 实例方法**：属于实例对象，必须`new`出实例后才能调用。
- **static 静态属性 / 静态方法**：属于类本身，直接`类名.xxx`访问，实例无法访问静态成员。
- **readonly**：只读修饰符，属性一旦赋值完成，后续不能修改。可以搭配static使用。
- 注意：静态方法内`this`指向当前类；实例方法内`this`指向实例对象。
---
### 二、完整源码
```typescript
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
### 三、代码说明

- `readonly name`：实例只读属性，只能通过实例 `per.name` 获取，不能重新赋值。
- `gender`：普通实例属性，实例可以读取和修改，不同实例可以拥有不同的值。
- `static readonly age`：静态只读属性，挂载在 `Person` 类上，`Person.age` 访问。
- `static desc`：普通静态属性，可以读取修改，所有实例共享静态成员。
- `sayName() / sayGender()`：实例方法，必须用实例调用，内部`this`指向当前实例。
- `static sayHello() / static showDesc()`：静态方法，不需要实例，直接 `Person.xxx()` 执行，内部`this`指向类本身。
- 区分重点：**静态成员归类，实例成员归 new 出来的对象**。实例不能访问 static 静态成员，类不能直接调用实例属性和实例方法。
```
完整练习代码：day05/class.ts
---

# Day06 TS 构造函数 constructor
---
### 一、核心知识点
- `constructor` 叫做**构造函数**，在使用 `new` 创建类实例对象的时候自动执行。
- 构造函数作用：初始化实例对象，给实例添加自定义属性。
- 构造函数内的 `this`：代表**刚刚new出来的实例对象**。
- 实例方法里的 `this`：代表**调用这个方法的实例**。
- 每次`new`类，都会生成独立实例，实例之间属性互不干扰。
---
### 二、完整源码
```typescript
class Dog{
    name = '旺财';
    age = 3;

    // constructor 被称为构造函数
    // 构造函数会在对象创建时调用
    constructor(name:string,age:number){
        // 在实例方法中，this就表示当前新建的那个对象
        // 在构造函数中当前对象就是当前新建的那个对象
        // 可以通过this向新建的对象中添加属性
        this.name = name;
        this.age = age;
    }

    bark(){
        // alert('汪汪')
        // 在方法中可以通过this来表示当前调用方法的对象
        console.log(this);
    }
}

const dog = new Dog('qqq',12);
const dog2 = new Dog('eee',14);

console.log(dog);
console.log(dog2);
dog.bark();
```
完整练习代码：day06/constructor.ts
---

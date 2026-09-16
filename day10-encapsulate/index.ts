// 属性封装练习，public / private / protected
class Person {
  // private 私有属性，外部无法直接访问
  private _name: string
  private _age: number

  constructor(name: string, age: number) {
    this._name = name
    this._age = age
  }

  // getter 获取名字
  get name(): string {
    return this._name
  }

  // getter + setter 控制年龄读写，增加校验
  get age(): number {
    return this._age
  }
  set age(newAge: number) {
    if (newAge > 0 && newAge < 150) {
      this._age = newAge
    } else {
      console.log("年龄输入不合法！")
    }
  }

  // protected 受保护属性，只能本类和子类访问
  protected id: number = 1001
}

class Student extends Person {
  constructor(name: string, age: number) {
    super(name, age)
  }
  showId() {
    // 子类可以访问 protected
    console.log(this.id)
    // 无法访问 private 的 _name
    // console.log(this._name) 报错
  }
}

const p1 = new Person("小明", 20)
console.log(p1.name)
p1.age = 25
console.log(p1.age)
p1.age = -5 // 触发校验，不会修改

const s1 = new Student("小红",18)
s1.showId()

/***
 * @Author: fwt
 * @Date: 2022-01-20 17:27:25
 * @Email: 137942170@qq.com
 * @LastEditors: fwt
 * @LastEditTime: 2022-02-11 17:31:12
 * @FilePath: /ts/demo.ts
 * @Description: 
*/
//一、 类的访问类型
// private protected public
// 类的内部和类的外部

class Person{
    protected name!:string
    public sayHello(){
        console.log(this.name + ' sayHello')
    }
 }
//  const person1 = new Person();
//  person1.name = 'James'; 报错
//  person1.sayHello()
//  console.log(person1.name)报错

class Teacher extends Person {
    public sayBye(){
          this.name
          console.log('this.name',this.name)
    }

}
const person2 = new Teacher();
// person2.name ='say hello';
person2.sayBye()

// 类的构造函数
// class Person {
//     constructor(public name: string){
//         this.name = name
//     }
// }
// class Teacher extends Person {
//     // 子类中只要有构造函数就必须使用super
//     constructor(public age:number){
//         super('Jim Green')
//     }
// }
// const teacher = new Teacher(19);
// console.log(teacher.name)
// console.log(teacher.age)


// 二、get、set、static(静态类)
// class HMM{
//     constructor(private _age:number){
//     }
//     get age(){
//         return this._age -10
//     }
//     set age(age:number){
//         this._age = age +3
//     }
// }
// const hmm = new HMM(28);
// hmm.age = 25;
// console.log(hmm.age)
// static
// class Girl {
//     static sayLove(){
//         return 'say Love!'
//     }
// }

// const girl = new Girl()
// console.log(Girl.sayLove())
// 只读属性
// class Person {
//     public readonly _name: string
//     constructor(name:string){
//         this._name = name
//     }
// }

// const person = new Person('HMM')
// console.log(person._name)

// 三、抽象类
// abstract class Girl {
//     abstract skill():void;
// }

// class Waiter extends Girl{
//     skill() {
//         console.log('端茶递水')
//     }
//     printName(): void {
//         console.log('Department name: ');
//     }
// }

// class BaseTeacher extends Girl{
//     skill() {
//         console.log('按摩')
//     }
// }

// class seniorTeacher extends Girl{
//     skill() {
//         console.log('SPA')
//     }
// }

// let girl:Girl;
// const girl = new Girl();
// girl  = new Waiter();
// console.log(girl.printName())不可行：方法在声明类中不存在
// console.log(girl.skill())

// 四、ts.config

const person:string ='HMM';

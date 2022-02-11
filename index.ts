/***
 * @Author: fwt
 * @Date: 2022-01-19 14:39:14
 * @Email: 137942170@qq.com
 * @LastEditors: fwt
 * @LastEditTime: 2022-02-11 16:29:21
 * @FilePath: /ts/index.ts
 * @Description: 
*/
// 一、
// 安装ts环境
// yarn global add typescript
// npm install -g ts-node
// function HMM() {
//     let web:string ="hello wrold"
//     console.log(web)
// }
// HMM();
// 全局安装ts-node直接node中编译ts文件
// 二、 静态类型
// let count:number = 1;
// count = 2;
// 自定义静态类型的使用
// interface XJJ {
//     uname:string;
//     age:number;
// }
// const xh: XJJ ={
//     uname:'HMM',
//     age:18
// }
// console.log(xh.age)
// 三、基础静态类型和对象静态类型
// 静态类型
//  const count: number = 999;
//  const myName: string ='HMM';
 //null,undefinde,boolean,void,symnbol;
//  对象类型
// const XJJ:{
//     uname:string,
//     age:number
// } = {
//     uname:'HMM',
//     age:18
// }
// 数组类型
// const XJJs:string[] =['fwt','fwa','hs','111']
// 类类型
// class Person {}
// const cls : Person = new Person();
// 函数类型
// const XJJFun :()=>string=()=>{
//     return 'HMM'
// } 
// 四、type annotation 类型注解 type inference 类型推断

// 类型注解
// let count : number ;
// count = 123;
// let conuntInference =123
// 类型推断
// function getTotal(one : number, two : number) {
//     return one + two;
// }
// const total = getTotal(1,2)

// const XJJ ={
//     name : 'HMM',
//     age : 18
// }

// 五、函数返回类型注解

// function getTotal(one : number, two : number):number {
//     return one + two;
// }
// const total= getTotal(1,2)

// void:
// function sayHello(): void {
//     console.log('Hello World')
// }

// never:
// function errorFunction(): never{
//     throw new Error()
//     console.log('Hello World')
// }

// function forNever(): never {
//     while(true){}
//     console.log('Hello World')
// }

// function add({one,two} : {one : number,two : number}) {
//     return  one + two;
// }

// const total = add({one:1,two:2})

// function getNumber({one}:{one:number}){
//     return one 
// }
// const one = getNumber({one:1})
// 六、 数组类型
// const numberArr:number[] = [1,2,3];
// const numberStr: string[]=['1','2','3'];
// const undefindeArr:undefined[]=[undefined,undefined]
// const Arr:(number | string)[] = [1,'string',2]
// type alias 类型别名
// (1)
// const XJJArr:{name:string,age:number}[] =[
//     {
//         name:'HMM',
//         age:18
//     },
//     {
//         name:'JIM',
//         age:19
//     }
// ]
// (2)
// type Children = {
//     name:string,
//     age:number 
// }

// const XJJArr:Children[] =[
//     {
//         name:'HMM',
//         age:18
//     },
//     {
//         name:'JIM',
//         age:19
//     }
// ]
// class Student {
//     name:string;
//     age:number;
// }
// const student:Student[]= [
//         {
//         name:'HMM',
//         age:18
//     },
//     {
//         name:'JIM',
//         age:19
//     }
// ]
// 七、元组
// const XJJ:(string | number)[]=['HJJ','LL',28]
// CSV
// const XJJ:[string,string,number]=['HJJ','LL',28]
// const HMM:[string,string,number][] =[['hmm','ll',18],['jim','green',20]]

// 八、interface

// const screenResume = (
//     name:string,
//     age:number,
//     bust:number
// )=>{
//     age < 24 && bust >= 90 && console.log(name+'符合要求')
//     age >= 24 || bust < 90 && console.log(name+'不符合要求')
// }

// const getResume =(
//     name:string,
//     age:number,
//     bust:number
// )=>{
//     console.log(name+'年龄是'+age)
//     console.log(name+'胸围是'+bust)
// }

// screenResume('HJJ',18,80)
// getResume('HMM',18,94)

// interface Girl {
//     name:string;
//     age:number;
//     bust:number;
//     waistline?:number;
//     [porpname:string]:any;
//     say():string;
// }

// const girl={
//     name:'HMM',
//     age:18,
//     bust:94,
//     waistline:100,
//     sex:'women',
//     say(){
//         return 'type script test'
//     },
//     teach(){
//         return ' I teach you'
//     }
// }
// const screenResume =(girl:Teacher)=>{
//     girl.age < 24 && girl.bust >= 90 && console.log(girl.name+'符合要求')
//     girl.age >= 24 || girl.bust < 90 && console.log(girl.name+'不符合要求')
//     girl.waistline && console.log(girl.waistline);
//     girl.sex && console.log(girl.name + '性别是:'+girl.sex);
//     girl.teach && console.log(girl.teach())
    
// }
// screenResume(girl)
// 九、类
// class HMM implements Girl {
//     name:'HMM';
//     age:18;
//     bust:94;
//     waistline:100;
//     sex:'women';
//     say(){
//         return 'type script test'
//     }
// }

// interface Teacher extends Girl{
//     teach():string;
// }
//类的继承
// class Lady {
//     content='Hi Green'
//     sayHello(){
//         return  this.content
//     }
// }
// // 重写 Super
// class XJJ extends Lady{
//     sayHello(){
//         return  super.sayHello()+'。 Hello'
//     }
//     sayLove() {
//         return 'i love yH z'
//     }
// }

// const goddess = new XJJ();
// console.log(goddess.sayHello())
// console.log(goddess.sayLove())
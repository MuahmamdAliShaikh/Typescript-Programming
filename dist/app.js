"use strict";
//Example of typescript
// const input1 = document.getElementById("num1")! as HTMLInputElement; // ! mark is used to prove that num1 id is present in html body not null. Without ! typescrpt consider the id null
// const input2 = document.getElementById("num2")!as HTMLInputElement; // HTMLInputElement: indicate the given input 2 is a htmlinputelement
// const button = document.getElementById("btn")!; 
// const add = function(num1: number, num2: number) {
//     return num1 + num2
// };
// button.addEventListener("click",function() {
//     const firstVal = input1.value; // The value property sets or returns the value of the value attribute of a text field
//     const secondVal = input2.value;
//     console.log(add(+firstVal,+secondVal));//+ sign is used to convert the string into number
// });
//Basic types
// 1.String: string => "Apple","Orange"
// 2.Number: number =>12,-33,24
// 3.Boolean: boolean => True / false
// const arr: string[] = ["Apple","Orange"]; //i can run this file on teminal by using npx ts-node app.ts
// arr.push("Banana")
// console.log(arr)
// const arr2: number[] = [1,2,3,4];
// arr2.push(5);
// console.log(arr2);
// let message: string = 'Hello World';
// console.log(message);
// type Person = {  //custom type
//     name: string;
//     rollNo: number;
//     hobbies: string[];
//     email?: string; //? is used to indicate that this field is optional
// };
// let person: Person  = { //Simple Object like js object
//     name: "ALI",
//     rollNo: 405,
//     hobbies: ["Video games"],
//     email: " "
// }
// person.email = "muhammadalishaikh1260ue@gmail.com"
// const persons: Person[] = []; 
// persons.push({
//     name: "Ameen",
//     rollNo: 696,
//     hobbies: ["Cricket"],
//     email: "alisheikh@gmailcom"
// });
//Add function
const add = function (num1, num2, cb) {
    cb("Hello World");
    return num1 + num2;
};
let func;
func = add;
const f = add(2, 3, (cb) => {
    console.log(`The result is: ${cb}`);
});
console.log(f);
//type literal means strings mein bhi ya wali chahiya ha eg: add|subtract
// type Calc = "add"|"subtract"|"+"|"-"; //typescript union operator |
// const add = function(num1: number, num2: number, calc: Calc ){  
//     if (calc === "add" || calc ==="+"){
//         return num1 + num2;
//     }
//     else if (calc === "subtract" ||calc === "-"){
//         return num1 - num2;
//     }
// };
// console.log(add(60,40,"+"))
//Tuples fixed length array
//Examples of tuple
// let gender: [string , string] = ["Male","Female"];
// gender.push("shemale") //there is a problem of typescript that is push the element into the tuple which can not push.It is a breaking change which can solve in future.
// let admin: [number,string ] = [1,"Admin"];
// let error: [number,string] = [404,"Not found"];
//command for open tsconfig.json = tsc --init
//Class
// class Student {
//     private readonly skills: string[] = [];
//     constructor(public name : string, public readonly rollNo: number) {
//     }
//     addSkill(skill: string){
//         this.skills.push(skill)
//     }
// }
// const Student1 = new Student("Ali", 1234);
// const Student2 = new Student("Mohsin", 1489);
// Student1.addSkill("Python")
// Student2.addSkill("Javascript")
// console.log(Student1,Student2)
//tsc --watch: used to compiler many times shortcut=tsc-w
//Sourcemap file is used to open the tsfile in browswer and can apply debuging on it
//Javascipt doesnot support private member. By using ts we can not code wrong bcz it support private member
//Getter(always required a return ) and setter (always required a parametric value)
//Parent class
// abstract class Product {
//     constructor(
//         private _id: number,
//         private _name: string,
//         private _price: number
//     ){}
//     get id(): number {
//         return this._id;
//     }
//     get name(): string {
//         return this._name;
//     }
//     set name (newName: string){
//         if (!newName){ //if not string 
//             throw new Error("Name cannot be empty");
//         }
//         this._name = newName;
//     }
//     get price(): number {
//         return this._price;
//     }
//     abstract getDiscountRates(): number;
// }
// // child class
// class ClothingProduct extends Product{
//     constructor (
//         id:number,
//         name:string,
//         price:number,
//         private _color: string,
//         private _size: "M"|"S"|"L"|"XL"
//     ){
//         super(id,name,price);
//     }
//     getDiscountRates() {
//         return this.price * 0.9;
//     }
// }
// class ElectronicsProduct extends Product{
//     constructor(
//         id:number,
//         name:string,
//         price:number,
//         private _brand: string,
//         private _model: string
//     ){
//         super(id,name,price);
//     }
//     getDiscountRates() {
//         return this.price * 0.5;
//     }
// }
// class Cart{
//     private products: Product[] =[]
//     constructor(){}
//     get totalPrice (){
//         let price: number =0;
//         for (let product in this.products){
//             price += product.price;
//         }
//     }
// }
//Abstract method: asa method jo base class chaha gi jo bhi mjha extend kara iss ka pass ya method ho
// const tshirt = new ClothingProduct(1,"Cup",1000,"white","M")
// console.log(tshirt)
//Singleston method: koi bhi class jis me app chaho app ka instance aik bar hi bana
//Static method:- connented from class and disconnected from the instance eg: Math.round
//Nonstatic method:- jo object/instance bana ka baad generate hon means instance sa connect hon eg:New Date()
//Static propertities: Math.PI
// class utility{ //Singletons
//     private static instance: utility; //Static Property
//     private constructor(){//Agar ap constructor private kardo ga tou app new kar ka bahar sa call nhi kar sakhta error ajaye ga
//     }
//     static getInstance(){
//         if (!this.instance){
//             this.instance = new utility; 
//         }
//         return this.instance;
//     }
// }
// const utlInstance = utility.getInstance();
// const utlInstance2 = utility.getInstance();
//String | number Union Operators
// let abc: string | number= "Apple"
// abc =123;
// custom type
// type Animal = {
//     name: string;
//     runningSpeed: number;
// }
// type Bird = {
//     name: string;
//     flyingSpeed: number;
// }
// type Creature = Animal | Bird; //Union Types
// const tiger: Creature = {
//     name: "Tiger",
//     runningSpeed: 300
// }
//Intersection type
// type Creature = Animal & Bird;
// const Cockroach: Creature = {
//     name: "Tiger",
//     runningSpeed: 300,
//     flyingSpeed: 100
// }
//Interfaces: the work which we can done by using type and the advatage is that it can implemented with classes
// interface Animal {
//     name: string;
//     runningSpeed: number;
// }
// interface Bird {
//     name: string;
//     flyingSpeed: number;
// }
// interface Creature extends Animal, Bird {}
// const tiger: Creature= {
//     name: "Tiger",
//     runningSpeed: 300,
//     flyingSpeed: 10
// }
// interface Animal {
//     name: string;
//     runningSpeed: number;
//     eat (food:string): string
// }
// class Tiger implements Animal{
//     constructor(
//         public name: string, 
//         public runningSpeed: number,
//     ){}
//     eat (food:string){
//         return "Eating Food";
//     }
// }
//Type guards : used when we define union type
// type Animal = {
//     name: string;
//     runningSpeed: number;
// }
// type Bird = {
//     name: string;
//     flyingSpeed: number;
// }
// type Creature = Animal | Bird;
// function log(creature: Creature){
//     if("runningSpeed" in creature){ //Type Guards
//         console.log(creature.runningSpeed);
//     }
// }
// const sparrow : Creature = {
//     name: "Sparrow",
//     flyingSpeed : 150
// }
// log(sparrow);
//Type Casting: the thing we define after 'as' i.e. as HTMLInputElement. If we dont define so it cant know the type of input in js.
// const input =  document.getElementById("input1")! as HTMLInputElement; //Typecasting method 1
// const input1 =  <HTMLInputElement>document.getElementById("input1")! ;//Typecasting method 2
//A Promise represents something that is eventually fulfilled and it is used when we want to perform tasks .Eg (.then)
//ECMAScript: It is the scripting language that formed the basis of browser-based Javascript and Node.js
//JavaScript is a general-purpose scripting language that conforms to the ECMAScript specification. The ECMAScript specification is a blueprint for creating a scripting language. JavaScript is an implementation of that blueprint. On the whole, JavaScript implements the ECMAScript specification as described in ECMA-262
// Asynchronous programming: Asynchronous is a non-blocking architecture, which means it doesn't block further execution while one or more operations are in progress. With asynchronous programming, multiple related operations can run concurrently without waiting for other tasks to complete.
//Es5 used libraries like blue word, after ES6 promises become builtin
//Callback fn: A callback is a function passed as an argument to another function. A callback function can run after another function has finished
// The phenomenon which happens when we nest multiple callbacks within a function is called a callback hell. 
//Generics 
//Example#1
// type User = {
//     name: string;
//     id: number;
// }
//<> it is a angle bracket
// const promise = new Promise<User>((resolve, reject) =>{ //Here we define a promise and Promise<string> means promise resolve hona ka baad hamara liya string laker aye ga it is called generics
//     setTimeout(() => {
//         resolve({
//             name:"Ali",
//             id: 123
//     });
//     },2000)
// });
// promise.then((data)=>{
//     console.log(data.id)
// })
//Example#2
// function merge<T extends object, U extends object>(objA: T,objB: U){
//     //...(Spread operator)
//     return {...objA,...objB} //It will merged the object.If two object are merged together so it is called a intersection
// }
// const merged = merge({name: "Ali"},{id: 123});
// console.log(merged);
//Decorators : Used with classes means connect with the classes. It is not in js  
// function Logger (message: String){  //Decorator factory
//     return function(constructor: Function){ //Actual Decorator
//         console.log("LOADING....")
//         console.log(message)
//     }
// }
// function fillHtml (template: string,elemId: string){  //Decorator factory
//     return function(constructor: any){ //Actual Decorator
//         const p = new constructor(); // new Person()
//         const  elem = document.getElementById(elemId);
//         if (elem){
//             elem.innerHTML=template;
//             elem.querySelector("h1")!.innerText = p.name
//         }
//     }
// }
// @fillHtml("<h1>HELLO<h1>","app")
// @Logger("calling from Paerson") //This argument save in the message and its type is return 
// class Person {
//     name = "Ali";
//     constructor(){}
// }
//Without Decorators
// class Person {
//     name = "Ali";
//     id = 123 ;
//     constructor(){}
// }
// function fillHtml (template: string,elemId: string){  //Decorator factory
//         const p = new Person();
//             const  elem = document.getElementById(elemId);
//             if (elem){
//                 elem.innerHTML=template;
//                 elem.querySelector("h1")!.innerText = p.name;
//         }
//     }
// fillHtml("<h1>HELLO<h1>","app")
//Function Overloading
// type combined = string | number;
// function add(x: number , y:number ): number;//number impl  //you can do typecasting in place of line 369 and 370
// function add(x: string , y:string): string;// string impl
// function add(x: combined , y:combined ){
//     if (typeof x === "number" && typeof y === "number"){
//         return x + y
//     }
//     else if (typeof x === "string" && typeof y === "string"){
//         return x + y
//     }
//     else{
//         throw new Error("Type did not match");
//     }
// }
// const value1 = add("Hello", "World") // as string; 
// const value2 = add(2,9) // as number;
// value2.toFixed()
// console.log(value1.split(""))
//# sourceMappingURL=app.js.map
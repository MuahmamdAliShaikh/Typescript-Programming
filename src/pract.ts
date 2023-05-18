// const input1 =  document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// const button = document.getElementById("btn")! ;

// const add = function(x: number,y: number){
//     return x + y;
// }
// button.addEventListener("click",function(){
//     const num1 = input1.value;
//     const num2 = input2.value;
//     console.log(add(+num1,+num2))
// })
type Person = {
    name: string;
    fname: string;
    mname: string;
    contact: number;
    id?: number
}
let person: Person = {
    name: "Muhammad Ali Shaikh",
    fname: "Shaikh Farhan u Din",
    mname: "lubna Farhan",
    contact: 376

}
const p: Person[] = [];
p.push(person)
console.log(p)

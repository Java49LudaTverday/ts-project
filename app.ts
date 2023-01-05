// for(let i= 0; i<3; i++) {
//     setTimeout(()=> console.log(i));
// }
// let a = 10;
// console.log(`a = ${a}`);
//variables:
let hello = "world";
const vasya = "Vasia";
const b = 10;
let c: string;
c = "10";
function getRandomNuber(min:number, max:number):number{
    return Math.floor(min+Math.random()* (max-min+1));
}
// HW#30 
function shiftCipher(str: string, shift:number = 1): string {
    // lowCase (a-z) letter code ascii this letter to move on shift
    //a=>b,..., z=>a loop abc
    //for each lowCase letter (a-z) you should perform code ASCII shift
    // on a given shift (add)
    // shift should ve in cycle of lower case letter
    // code ASCII "z" - 2 = "x";
    //examples: 
    //shiftCipher("dec.", -3) => "abz." 
    return "todo";
}
function shiftDecipher(str: string, shift: number = 1): string{
    //for each lowCase letter (a-z) you should perform code ASCII shift
    // on a given shift (subtract)
    // shift should ve in cycle of lower case letter
    // code ASCII "z" + 2 = "b";
    //examples: 
    //shiftCipher("abz.", 3) => "dec." 
 return "";
}
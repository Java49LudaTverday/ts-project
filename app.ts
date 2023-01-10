import { CipherDecipher } from "./CipherDecipher";

// const leastASCIIcode:number = 48;
// const mostASCIIcode: number = 57;
// const SHIFT:number = 20;

const leastASCIIcode:number = "0".charCodeAt(0);
const mostASCIIcode: number = "9".charCodeAt(0);
const SHIFT:number = 5; 

const cipher1 = new CipherDecipher (leastASCIIcode,mostASCIIcode,SHIFT);
let res: string = cipher1.shiftCipher("abz123");
console.log(cipher1);
console.log(res);
let decipherRes = cipher1.shiftDecipher(res);
console.log(decipherRes);
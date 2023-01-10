"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CipherDecipher_1 = require("./CipherDecipher");
// const leastASCIIcode:number = 48;
// const mostASCIIcode: number = 57;
// const SHIFT:number = 20;
const leastASCIIcode = "0".charCodeAt(0);
const mostASCIIcode = "9".charCodeAt(0);
const SHIFT = 5;
const cipher1 = new CipherDecipher_1.CipherDecipher(leastASCIIcode, mostASCIIcode, SHIFT);
let res = cipher1.shiftCipher("abz123");
console.log(cipher1);
console.log(res);
let decipherRes = cipher1.shiftDecipher(res);
console.log(decipherRes);
//# sourceMappingURL=app.js.map
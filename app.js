"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CipherDecipher_1 = require("./CipherDecipher");
const cipher1 = new CipherDecipher_1.CipherDecipher(0, 225, 3);
let res = cipher1.shiftCipher("abz123");
console.log(cipher1);
console.log(res);
let decipherRes = cipher1.shiftDecipher(res);
console.log(decipherRes);
//# sourceMappingURL=app.js.map
import { CipherDecipher } from "./CipherDecipher";

const cipher1 = new CipherDecipher (48,57,20);
let res: string = cipher1.shiftCipher("abz123");
console.log(cipher1);
console.log(res);
let decipherRes = cipher1.shiftDecipher(res);
console.log(decipherRes);
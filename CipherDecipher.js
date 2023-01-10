"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CipherDecipher = void 0;
class CipherDecipher {
    constructor(leastASCIIcode, mostASCIIcode, shift) {
        this.leastASCIIcode = leastASCIIcode;
        this.mostASCIIcode = mostASCIIcode;
        this.shift = shift;
        this.amountAllASCIIsym = this.mostASCIIcode - this.leastASCIIcode + 1;
    }
    shiftCipher(str) {
        return this.cipherDecipherFun(str, this.mapperCipher);
    }
    shiftDecipher(str) {
        return this.cipherDecipherFun(str, this.mapperDecipher);
    }
    cipherDecipherFun(str, mapperFun) {
        const leastSymb = String.fromCharCode(this.leastASCIIcode);
        const mostSymb = String.fromCharCode(this.mostASCIIcode);
        const arStr = Array.from(str);
        const arRes = arStr.map(symb => {
            let res = symb;
            if (symb <= mostSymb && symb >= leastSymb) {
                res = mapperFun.bind(this)(symb);
            }
            return res;
        });
        return arRes.join('');
    }
    mapperCipher(symb) {
        const actualShift = (symb.charCodeAt(0) - this.leastASCIIcode + this.shift) % this.amountAllASCIIsym;
        return String.fromCharCode(this.leastASCIIcode + actualShift);
    }
    mapperDecipher(symb) {
        const actialShift = (this.mostASCIIcode - symb.charCodeAt(0) + this.shift) % this.amountAllASCIIsym;
        return String.fromCharCode(this.mostASCIIcode - actialShift);
    }
}
exports.CipherDecipher = CipherDecipher;
//# sourceMappingURL=CipherDecipher.js.map
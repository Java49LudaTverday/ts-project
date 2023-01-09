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
        try {
            this.validShift(this.shift);
            const arStr = Array.from(str);
            console.log(arStr);
            const arRes = arStr.map(symb => {
                let res = mapperFun.bind(this)(symb);
                return res;
            });
            return arRes.join('');
        }
        catch (mes) {
            console.log(mes);
        }
    }
    mapperCipher(symb) {
        const actualShift = (symb.charCodeAt(0) - this.leastASCIIcode + this.shift) % this.amountAllASCIIsym;
        return String.fromCharCode(this.leastASCIIcode + actualShift);
    }
    mapperDecipher(symb) {
        const actialShift = (this.mostASCIIcode - symb.charCodeAt(0) + this.shift) % this.amountAllASCIIsym;
        return String.fromCharCode(this.mostASCIIcode - actialShift);
    }
    validShift(shift) {
        if (shift > this.mostASCIIcode) {
            throw "error: shift cannot be greater mostASCIIcode";
        }
    }
}
exports.CipherDecipher = CipherDecipher;
//# sourceMappingURL=CipherDecipher.js.map
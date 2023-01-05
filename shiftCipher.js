"use strict";
const A = "a".charCodeAt(0);
const Z = "z".charCodeAt(0);
const NUM_ABC = Z - A;
function shiftCipher(word, shift = 1) {
    const arrLetters = word.split('');
    return arrLetters.reduce((res, symbol) => {
        let codeSymbol = symbol.charCodeAt(0);
        let shiftCode = codeSymbol + shift;
        return shiftCipherSymbol(res, symbol, codeSymbol, shiftCode);
    }, "");
}
function shiftDeCipher(word, shift = 1) {
    const arrLetters = word.split('');
    return arrLetters.reduce((res, symbol) => {
        let codeSymbol = symbol.charCodeAt(0);
        let shiftCode = codeSymbol - shift;
        return shiftCipherSymbol(res, symbol, codeSymbol, shiftCode);
    }, "");
}
function shiftCipherSymbol(res, sym, codeSymbol, shiftCode) {
    if (codeSymbol < A || codeSymbol > Z) {
        res += sym;
    }
    else {
        if (shiftCode < A) {
            res += String.fromCharCode(shiftCode + (NUM_ABC + 1));
        }
        else if (shiftCode > Z) {
            res += String.fromCharCode(shiftCode - (NUM_ABC + 1));
        }
        else {
            res += String.fromCharCode(shiftCode);
        }
    }
    return res;
}
let word = "abz.1+";
let step = 3;
let wordCipher = shiftCipher(word, step);
let wordDeCipher = shiftDeCipher(wordCipher, step);
console.log(`Word: ${word}, STEP: ${step} AFTER_Cipher: ${wordCipher}, AFTER_Decipher: ${wordDeCipher}`);
step = -3;
let wordCipher1 = shiftCipher(word, step);
let wordDeCipher1 = shiftDeCipher(wordCipher, step);
console.log(`Word: ${word}, STEP: ${step} AFTER_Cipher: ${wordCipher1}, AFTER_Decipher: ${wordDeCipher1}`);
//# sourceMappingURL=shiftCipher.js.map
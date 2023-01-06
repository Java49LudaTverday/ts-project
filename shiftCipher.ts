const A = "a".charCodeAt(0);
const Z = "z".charCodeAt(0);
const NUM_ABC = Z - A + 1;

function shiftCipher(word: string, shift: number = 1): string {
    shift %= NUM_ABC;
    const arrLetters = word.split('');
    return arrLetters.reduce((res:string, symbol:string) => {
        return shiftCipherSymbol(res, symbol, shift);
    }, "");
}

function shiftDeCipher(word: string, shift: number = 1): string {
    shift %= NUM_ABC;
    shift *= -1;
    const arrLetters = word.split('');
    return arrLetters.reduce((res: string, symbol: string) => {
        return shiftCipherSymbol(res, symbol, shift);
    }, "");
}

function shiftCipherSymbol(res: string, sym: string, shift: number): string {
    let codeSymbol: number = sym.charCodeAt(0);
    let shiftCode: number = codeSymbol + shift;
    if (codeSymbol < A || codeSymbol > Z) {
        res += sym;
    } else {
        if (shiftCode < A) {
            res += String.fromCharCode(shiftCode + NUM_ABC);
        } else if (shiftCode > Z) {
            res += String.fromCharCode(shiftCode - NUM_ABC);
        }
        else {
            res += String.fromCharCode(shiftCode);
        }
    }
    return res;
}

let word: string = "abz.1+";
let step: number = 27;

let wordCipher: string = shiftCipher(word, step);
let wordDeCipher: string = shiftDeCipher(wordCipher, step);
console.log(`Word: ${word}, STEP: ${step} AFTER_Cipher: ${wordCipher}, AFTER_Decipher: ${wordDeCipher}`);

step = -3;
let wordCipher1 = shiftCipher(word, step);
let wordDeCipher1 = shiftDeCipher(wordCipher1, step);
console.log(`Word: ${word}, STEP: ${step} AFTER_Cipher: ${wordCipher1}, AFTER_Decipher: ${wordDeCipher1}`);

step = 150;
let wordCipher2 = shiftCipher(word, step);
let wordDeCipher2 = shiftDeCipher(wordCipher2, step);
console.log(`Word: ${word}, STEP: ${step} AFTER_Cipher: ${wordCipher2}, AFTER_Decipher: ${wordDeCipher2}`);

step = 1000;
let wordCipher3 = shiftCipher(word, step);
let wordDeCipher3 = shiftDeCipher(wordCipher3, step);
console.log(`Word: ${word}, STEP: ${step} AFTER_Cipher: ${wordCipher3}, AFTER_Decipher: ${wordDeCipher3}`);
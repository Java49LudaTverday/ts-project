type mapperFun = (symb: string) => string;
export class CipherDecipher {
    private amountAllASCIIsym: number;
    constructor(private leastASCIIcode: number, private mostASCIIcode: number, private shift: number) {
        this.amountAllASCIIsym = this.mostASCIIcode - this.leastASCIIcode + 1;
    }
    shiftCipher(str: string): string {
        return this.cipherDecipherFun(str, this.mapperCipher);
    }
    shiftDecipher(str: string): string {
        return this.cipherDecipherFun(str, this.mapperDecipher);
    }
    private cipherDecipherFun(str: string, mapperFun: mapperFun ): string {
        const leastSymb: string = String.fromCharCode(this.leastASCIIcode);
        const mostSymb: string = String.fromCharCode(this.mostASCIIcode);
        const arStr: Array<string> = Array.from(str);
        const arRes: Array<string> = arStr.map(symb => {
            let res: string = symb;
            if (symb <= mostSymb && symb >= leastSymb) {
                 res = mapperFun.bind(this)(symb);              
            }
            return res;
        })
        return arRes.join('');
    }
    private mapperCipher(symb: string): string {
        const actualShift: number = (symb.charCodeAt(0) - this.leastASCIIcode + this.shift) % this.amountAllASCIIsym;
        return String.fromCharCode(this.leastASCIIcode + actualShift);
    }
    private mapperDecipher(symb: string): string {
        const actialShift: number = (this.mostASCIIcode - symb.charCodeAt(0) + this.shift) % this.amountAllASCIIsym;
        return String.fromCharCode(this.mostASCIIcode - actialShift);
    }
}



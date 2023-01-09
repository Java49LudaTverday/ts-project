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
    cipherDecipherFun(str: string, mapperFun: (symb: string) => string): any {
        try{
            this.validShift(this.shift);
            const arStr: Array<string> = Array.from(str);
        console.log(arStr);
        const arRes: Array<string> = arStr.map(symb => {
            let res: string = mapperFun.bind(this)(symb);
            return res;
        })
        return arRes.join('');
        } catch (mes){
            console.log (mes);
        }        
    }
    mapperCipher(symb: string): string {
        const actualShift: number = (symb.charCodeAt(0) - this.leastASCIIcode +  this.shift) % this.amountAllASCIIsym;
        return String.fromCharCode(this.leastASCIIcode + actualShift);
    }
    mapperDecipher(symb: string): string {
        const actialShift: number = (this.mostASCIIcode - symb.charCodeAt(0) + this.shift) % this.amountAllASCIIsym;
        return String.fromCharCode(this.mostASCIIcode - actialShift);
    }
    validShift(shift: number){
        if(shift > this.mostASCIIcode){
            throw "error: shift cannot be greater mostASCIIcode";
        }

    }

}



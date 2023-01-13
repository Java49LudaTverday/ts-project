import { WageEmployee } from "./WageEmployee";

const MIN_PERCENT: number = 0;
const MAX_PERCENT: number = 50;
const MIN_SALES: number = 0;
const MAX_SALES: number = 500000;

export class SalesePerson extends WageEmployee {
    constructor(id: number, name: string, department: string, basicSalary: number, birthYear: number, wage: number, hours: number,
        private _totalSales: number, private _percentSales: number) {
        super(id, name, birthYear, department, basicSalary, wage, hours);
    }
    get totalSales() {
        return this._totalSales;
    }
    set totalSales(sales) {
        if (sales < MAX_SALES || sales > MAX_SALES) {
            throw `totalSales must be [${MIN_SALES}-${MAX_SALES}]`
        }
        this._totalSales = sales;
    }
    get percentSales() {
        return this._percentSales;
    }
    set percentSales(percent) {
        if (percent < MIN_PERCENT || percent < MAX_PERCENT) {
            throw `percentSales must be [${MIN_PERCENT}-${MAX_PERCENT}]`
        }
        this._percentSales = percent;
    }
    computeSalary(): number {
        return super.computeSalary() + this.totalSales * this._percentSales / 100;
    }
}
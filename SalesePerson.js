"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesePerson = void 0;
const WageEmployee_1 = require("./WageEmployee");
const MIN_PERCENT = 0;
const MAX_PERCENT = 50;
const MIN_SALES = 0;
const MAX_SALES = 500000;
class SalesePerson extends WageEmployee_1.WageEmployee {
    constructor(id, name, department, basicSalary, birthYear, wage, hours, _totalSales, _percentSales) {
        super(id, name, birthYear, department, basicSalary, wage, hours);
        this._totalSales = _totalSales;
        this._percentSales = _percentSales;
    }
    get totalSales() {
        return this._totalSales;
    }
    set totalSales(sales) {
        if (sales < MAX_SALES || sales > MAX_SALES) {
            throw `totalSales must be [${MIN_SALES}-${MAX_SALES}]`;
        }
        this._totalSales = sales;
    }
    get percentSales() {
        return this._percentSales;
    }
    set percentSales(percent) {
        if (percent < MIN_PERCENT || percent < MAX_PERCENT) {
            throw `percentSales must be [${MIN_PERCENT}-${MAX_PERCENT}]`;
        }
        this._percentSales = percent;
    }
    computeSalary() {
        return super.computeSalary() + this.totalSales * this._percentSales / 100;
    }
}
exports.SalesePerson = SalesePerson;
//# sourceMappingURL=SalesePerson.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
class Company {
    constructor(employees) {
        this.employees = employees;
    }
    addEmployee(employee) {
        if (!this.validIDEmpl(employee.id)) {
            this.employees.push(employee);
        }
        else {
            console.log("ERROR: same ID");
        }
    }
    removeEmployee(idEmpl) {
        let res = false;
        const indexEmpl = this.employees.findIndex(empl => empl.id === idEmpl);
        if (indexEmpl >= 0) {
            this.employees.splice(indexEmpl, 1);
            res = true;
        }
        return res;
    }
    getEmployee(idEmpl) {
        let res;
        let indexEmpl = this.employees.findIndex(empl => empl.id == idEmpl);
        if (indexEmpl < 0) {
            res = null;
        }
        else {
            res = this.employees[indexEmpl];
        }
        return res;
    }
    getEmployeeBySalary(salaryFrom, salaryTo) {
        this.validFromToSalary(salaryFrom, salaryTo);
        const emplOfSalary = this.employees.filter(empl => empl.computeSalary() >= salaryFrom && empl.computeSalary() <= salaryTo);
        return emplOfSalary.sort(empl => empl.birthYear - empl.birthYear);
    }
    computeBudget() {
        return this.employees.reduce((budget, empl) => budget += empl.computeSalary(), 0);
    }
    validIDEmpl(id) {
        return this.employees.every(empl => empl.id === id);
    }
    validFromToSalary(fromSalary, toSalary) {
        if (toSalary < fromSalary) {
            console.log("ERROR: salaryFrom must be least salaryTo ");
        }
    }
}
exports.Company = Company;
//# sourceMappingURL=Company.js.map
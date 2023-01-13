import { Employee } from "./Employee";
import { WageEmployee } from "./WageEmployee";

export class Company {
    constructor(private employees: Array<Employee>) {
    }
    addEmployee(employee: Employee): void {
        if(!this.validIDEmpl(employee.id)){
        this.employees.push(employee);
        } else {
            console.log("ERROR: same ID");
        }
    }
    removeEmployee(idEmpl: number): boolean {
        let res: boolean = false;
        const indexEmpl = this.employees.findIndex(empl => empl.id === idEmpl);
        if (indexEmpl >= 0) {
            this.employees.splice(indexEmpl, 1);
            res = true;
        }
        return res;
    }
    getEmployee(idEmpl: number): Employee | null {
        let res: null | Employee;
        let indexEmpl: number | null = this.employees.findIndex(empl => empl.id == idEmpl);
        if (indexEmpl < 0) {
            res = null;
        } else {
            res = this.employees[indexEmpl];
        }
        return res;
    }
    getEmployeeBySalary(salaryFrom: number, salaryTo: number): Array<Employee> {
        this.validFromToSalary(salaryFrom,salaryTo);
        const emplOfSalary: Array<Employee> = this.employees.filter(empl => empl.computeSalary() >= salaryFrom && empl.computeSalary() <= salaryTo);
        return emplOfSalary.sort(empl => empl.birthYear - empl.birthYear);
    }
    computeBudget() {
        return this.employees.reduce((budget, empl) => budget += empl.computeSalary(), 0);
    }
    private validIDEmpl(id:number): boolean{
        return this.employees.every( empl => empl.id === id);
    }
    private validFromToSalary(fromSalary:number, toSalary:number) {
        if(toSalary < fromSalary){
            console.log("ERROR: salaryFrom must be least salaryTo ")
        }
    }
}
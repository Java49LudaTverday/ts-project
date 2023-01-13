"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Shape } from "./ShapeInterface";
// import { Rectangle } from "./Rectangel";
// import { Square } from "./Square";
// import { ShapesContainer } from "./ShapesContener";
const SalesePerson_1 = require("./SalesePerson");
const WageEmployee_1 = require("./WageEmployee");
const Company_1 = require("./Company");
const employees = [
    new WageEmployee_1.WageEmployee(123, "Vasia", 2000, "QA", 10000, 100, 50),
    new WageEmployee_1.WageEmployee(111, "Katia", 2001, "QA", 7000, 40, 150),
    new SalesePerson_1.SalesePerson(222, "Sonia", "XXX", 6000, 2002, 50, 120, 10000, 20)
];
const FABIAN = new Company_1.Company(employees);
console.log(FABIAN);
console.log(FABIAN.getEmployee(222));
const snir = new SalesePerson_1.SalesePerson(333, "Snir", "XXX", 7000, 1998, 60, 180, 20000, 20);
FABIAN.addEmployee(snir);
console.log(FABIAN);
//console.log(FABIAN.removeEmployee(snir.id));
console.log(FABIAN);
//console.log(FABIAN.removeEmployee(snir.id));
//console.log(FABIAN.getEmployeeBySalary(8000,13000));
console.log(FABIAN.getEmployee(snir.id));
console.log("11111: " + FABIAN.addEmployee(snir));
const budgetSalary = FABIAN.computeBudget();
console.log(budgetSalary);
// const shapes: Array<Shape> =[
//     new Rectangle (3,4),
//     new Square (5)
// ];
// const sumOfShapes: number = shapes.reduce((res,cur) => 
//      res + cur.getSquare(), 0);
// console.log (sumOfShapes);
// const shapeCont: ShapesContainer = new ShapesContainer (shapes);
// const sumSquares: number = shapeCont.getSquare();
// console.log(sumSquares);
//***********************************************************//
//# sourceMappingURL=app.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rectangel_1 = require("./Rectangel");
const Square_1 = require("./Square");
const shapes = [
    new Rectangel_1.Rectangle(3, 4),
    new Square_1.Square(5)
];
const sumOfShapes = shapes.reduce((res, cur) => res + cur.getSquare(), 0);
console.log(sumOfShapes);
//# sourceMappingURL=app.js.map
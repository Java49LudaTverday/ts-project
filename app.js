"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rectangel_1 = require("./Rectangel");
const Square_1 = require("./Square");
const ShapesContener_1 = require("./ShapesContener");
const shapes = [
    new Rectangel_1.Rectangle(3, 4),
    new Square_1.Square(5)
];
const sumOfShapes = shapes.reduce((res, cur) => res + cur.getSquare(), 0);
console.log(sumOfShapes);
const shapeCont = new ShapesContener_1.ShapesContainer(shapes);
const sumSquares = shapeCont.getSquare();
console.log(sumSquares);
//# sourceMappingURL=app.js.map
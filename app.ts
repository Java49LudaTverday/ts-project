import { Shape } from "./ShapeInterface";
import { Rectangle } from "./Rectangel";
import { Square } from "./Square";
import { ShapesContainer } from "./ShapesContener";

const shapes: Array<Shape> =[
    new Rectangle (3,4),
    new Square (5)
];

const sumOfShapes: number = shapes.reduce((res,cur) => 
     res + cur.getSquare(), 0);
console.log (sumOfShapes);

const shapeCont: ShapesContainer = new ShapesContainer (shapes);
const sumSquares: number = shapeCont.getSquare();
console.log(sumSquares);
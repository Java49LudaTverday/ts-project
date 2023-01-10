import { Shape } from "./ShapeInterface";
export class ShapesContainer implements Shape {
    constructor(private shapes:Array<Shape>){
        }
    getSquare(): number {
        return this.shapes.reduce((sum, shape) => sum + shape.getSquare(),0);
    }
    getPerimeter(): number {
        return this.shapes.reduce((sum, shape) => sum + shape.getPerimeter(),0);
    }
    
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapesContainer = void 0;
class ShapesContainer {
    constructor(shapes) {
        this.shapes = shapes;
    }
    getSquare() {
        return this.shapes.reduce((sum, shape) => sum + shape.getSquare(), 0);
    }
    getPerimeter() {
        return this.shapes.reduce((sum, shape) => sum + shape.getPerimeter(), 0);
    }
}
exports.ShapesContainer = ShapesContainer;
//# sourceMappingURL=ShapesContener.js.map
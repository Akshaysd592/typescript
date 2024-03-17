"use strict";
// Discriminated union
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    // return shape.side * shape.side // this can form error if reactangle interface additionally added 
    // that means rectangle should also be handled 
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape._length * shape.width;
        default:
            const defaultshape = shape; // never means not going to use it
            return defaultshape; // type never helpful to get error that some interfaces is not handled 
    }
}

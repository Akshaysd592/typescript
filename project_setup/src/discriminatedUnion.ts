
// Discriminated union


 interface Circle {
    kind: "circle",
    radius: number

 }

 interface Square{
    kind: "square",
    side:number
 }



 interface Rectangle{
    kind:"rectangle",
    _length:number,
    width:number
 }

 type Shape = Circle | Square | Rectangle

 function getTrueShape(shape: Shape){
    if(shape.kind ==="circle"){
        return Math.PI * shape.radius ** 2;
    }
    // return shape.side * shape.side // this can form error if reactangle interface additionally added 
                                    // that means rectangle should also be handled 
 }


 function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape._length * shape.width
        default:
            const defaultshape : never = shape // never means not going to use it
            return defaultshape // type never helpful to get error that some interfaces is not handled 
    }
 }
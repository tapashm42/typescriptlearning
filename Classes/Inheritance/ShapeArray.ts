
import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";


    let shape = new Shape(10,20);
    let circle = new Circle(5,15,25);
    let rectangle = new Rectangle(3,9,18,27)

    let shapes: Shape[] = [];
    shapes.push(shape);
    shapes.push(circle);
    shapes.push(rectangle);

    for (let item of shapes) {
        console.log(item.getInfo())
    }

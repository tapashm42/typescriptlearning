
import { Shape2 } from "./Shape2";
import { Circle2 } from "./Circle2";
import { Rectangle2 } from "./Rectangle2";


    let circle = new Circle2(5,15,25);
    let rectangle = new Rectangle2(3,9,18,27)

    let shapes: Shape2[] = [];
    shapes.push(circle);
    shapes.push(rectangle);

    for (let item of shapes) {
        console.log(item.calculateArea())
    }


import { Shape } from "./Shape";

 export class Circle extends Shape {

    constructor(private _radius: number,  x: number,  y: number) {
        super(x, y);
    }

    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }

    getInfo(): String {
        return super.getInfo() + `, ${this._radius}`;
    }
}

let circle = new Circle(50,20,30)

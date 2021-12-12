
import { Shape2 } from "./Shape2";

 export class Circle2 extends Shape2 {
    calculateArea(): number {
        return Math.PI * Math.pow(this.radius,2)
    }

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

let circle = new Circle2(50,20,30)

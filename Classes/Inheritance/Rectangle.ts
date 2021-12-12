import { Shape } from "./Shape";

export class Rectangle extends Shape {

    constructor(private _width: number, private _length: number, x: number,  y: number) {
        super(x, y);
    }

    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }

    public get length(): number {
        return this._length;
    }
    public set length(value: number) {
        this._length = value;
    }

    getInfo(): String {
        return super.getInfo() + `,${this._width} , ${this._length}`;
    }
}

let circle = new Rectangle(2,3,10,20)

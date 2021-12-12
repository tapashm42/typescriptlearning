import { Shape2 } from "./Shape2";

export class Rectangle2 extends Shape2 {
    calculateArea(): number {
        return this.length * this._width
    }

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

let circle = new Rectangle2(2,3,10,20)

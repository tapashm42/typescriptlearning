"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var shape = new Shape_1.Shape(10, 20);
var circle = new Circle_1.Circle(5, 15, 25);
var rectangle = new Rectangle_1.Rectangle(3, 9, 18, 27);
var shapes = [];
shapes.push(shape);
shapes.push(circle);
shapes.push(rectangle);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var item = shapes_1[_i];
    console.log(item.getInfo());
}

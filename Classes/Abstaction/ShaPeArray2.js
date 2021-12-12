"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle2_1 = require("./Circle2");
var Rectangle2_1 = require("./Rectangle2");
var circle = new Circle2_1.Circle2(5, 15, 25);
var rectangle = new Rectangle2_1.Rectangle2(3, 9, 18, 27);
var shapes = [];
shapes.push(circle);
shapes.push(rectangle);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var item = shapes_1[_i];
    console.log(item.calculateArea());
}

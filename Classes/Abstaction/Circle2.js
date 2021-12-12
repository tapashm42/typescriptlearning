"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle2 = void 0;
var Shape2_1 = require("./Shape2");
var Circle2 = /** @class */ (function (_super) {
    __extends(Circle2, _super);
    function Circle2(_radius, x, y) {
        var _this = _super.call(this, x, y) || this;
        _this._radius = _radius;
        return _this;
    }
    Circle2.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Object.defineProperty(Circle2.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
        },
        enumerable: false,
        configurable: true
    });
    Circle2.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + ", ".concat(this._radius);
    };
    return Circle2;
}(Shape2_1.Shape2));
exports.Circle2 = Circle2;
var circle = new Circle2(50, 20, 30);

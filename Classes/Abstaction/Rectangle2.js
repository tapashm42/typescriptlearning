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
exports.Rectangle2 = void 0;
var Shape2_1 = require("./Shape2");
var Rectangle2 = /** @class */ (function (_super) {
    __extends(Rectangle2, _super);
    function Rectangle2(_width, _length, x, y) {
        var _this = _super.call(this, x, y) || this;
        _this._width = _width;
        _this._length = _length;
        return _this;
    }
    Rectangle2.prototype.calculateArea = function () {
        return this.length * this._width;
    };
    Object.defineProperty(Rectangle2.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle2.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (value) {
            this._length = value;
        },
        enumerable: false,
        configurable: true
    });
    Rectangle2.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + ",".concat(this._width, " , ").concat(this._length);
    };
    return Rectangle2;
}(Shape2_1.Shape2));
exports.Rectangle2 = Rectangle2;
var circle = new Rectangle2(2, 3, 10, 20);

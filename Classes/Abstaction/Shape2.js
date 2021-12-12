"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape2 = void 0;
var Shape2 = /** @class */ (function () {
    function Shape2(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Shape2.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape2.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    Shape2.prototype.getInfo = function () {
        return "".concat(this._x, ", ").concat(this._y);
    };
    return Shape2;
}());
exports.Shape2 = Shape2;

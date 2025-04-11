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
exports.WithMilk = void 0;
var CoffeeDecorator_1 = require("./CoffeeDecorator");
var WithMilk = /** @class */ (function (_super) {
    __extends(WithMilk, _super);
    function WithMilk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WithMilk.prototype.getCost = function () { return this.coffee.getCost() + 0.5; };
    WithMilk.prototype.getDescription = function () { return "".concat(this.coffee.getDescription(), ", Milk"); };
    return WithMilk;
}(CoffeeDecorator_1.CoffeeDecorator));
exports.WithMilk = WithMilk;

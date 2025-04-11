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
exports.WithSugar = void 0;
var CoffeeDecorator_1 = require("./CoffeeDecorator");
var WithSugar = /** @class */ (function (_super) {
    __extends(WithSugar, _super);
    function WithSugar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WithSugar.prototype.getCost = function () { return this.coffee.getCost() + 0.3; };
    WithSugar.prototype.getDescription = function () { return "".concat(this.coffee.getDescription(), ", Sugar"); };
    return WithSugar;
}(CoffeeDecorator_1.CoffeeDecorator));
exports.WithSugar = WithSugar;

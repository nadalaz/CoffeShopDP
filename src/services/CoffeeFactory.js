"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeFactory = void 0;
var Espresso_1 = require("../models/Espresso");
var Latte_1 = require("../models/Latte");
var CoffeeFactory = /** @class */ (function () {
    function CoffeeFactory() {
    }
    CoffeeFactory.createCoffee = function (type) {
        switch (type.toLowerCase()) {
            case "espresso":
                return new Espresso_1.Espresso();
            case "latte":
                return new Latte_1.Latte();
            default:
                throw new Error("Unknown coffee type: ".concat(type));
        }
    };
    return CoffeeFactory;
}());
exports.CoffeeFactory = CoffeeFactory;

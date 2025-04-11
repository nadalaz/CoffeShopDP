"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryManager = void 0;
var InventoryManager = /** @class */ (function () {
    function InventoryManager() {
        this.ingredients = new Map([
            ['coffee_beans', 1000],
            ['milk', 500],
            ['sugar', 300]
        ]);
    }
    InventoryManager.getInstance = function () {
        if (!InventoryManager.instance) {
            InventoryManager.instance = new InventoryManager();
        }
        return InventoryManager.instance;
    };
    InventoryManager.prototype.useIngredient = function (name, quantity) {
        var current = this.ingredients.get(name) || 0;
        if (current >= quantity) {
            this.ingredients.set(name, current - quantity);
            return true;
        }
        return false;
    };
    return InventoryManager;
}());
exports.InventoryManager = InventoryManager;

// services/InventoryManager.ts
export class InventoryManager {
    private static instance: InventoryManager;
    private stock: Record<string, number>;

    private constructor() {
        this.stock = {
            milk: 10,
            sugar: 10,
            coffee_beans: 20,
        };
    }

    public static getInstance(): InventoryManager {
        if (!InventoryManager.instance) {
            InventoryManager.instance = new InventoryManager();
        }
        return InventoryManager.instance;
    }

    public checkStock(ingredient: string): number {
        return this.stock[ingredient] || 0;
    }

    public useIngredient(ingredient: string, amount: number): boolean {
        if (this.stock[ingredient] >= amount) {
            this.stock[ingredient] -= amount;
            return true;
        }
        return false;
    }
}
export class InventoryManager {
    private static instance: InventoryManager;
    private ingredients: Map<string, number>;

    private constructor() {
        this.ingredients = new Map([
            ['coffee_beans', 1000],
            ['milk', 500],
            ['sugar', 300]
        ]);
    }

    public static getInstance(): InventoryManager {
        if (!InventoryManager.instance) {
            InventoryManager.instance = new InventoryManager();
        }
        return InventoryManager.instance;
    }

    public useIngredient(name: string, quantity: number): boolean {
        const current = this.ingredients.get(name) || 0;
        if (current >= quantity) {
            this.ingredients.set(name, current - quantity);
            return true;
        }
        return false;
    }

    public checkStock(name: string): number {
        return this.ingredients.get(name) || 0;
    }
}
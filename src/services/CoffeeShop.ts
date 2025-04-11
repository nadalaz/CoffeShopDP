  // Changed to named import
 // Changed to named import
import { Coffee } from '../models/Coffee';  // Keep as named import
import { CoffeeFactory } from './CoffeeFactory';  // Changed to named import
import { WithMilk } from '../models/WithMilk';  // Keep as named import
import { WithSugar } from '../models/WithSugar';  // Removed .ts extension
import { InventoryManager } from './InventoryManager'; 
import { CoffeeDB } from './CoffeeDb';
export class CoffeeShop {
    private inventory = InventoryManager.getInstance();
    private db = new CoffeeDB();

    async orderCoffee(type: string, options: string[]): Promise<{id: number, coffee: Coffee}> {
        let coffee = CoffeeFactory.createCoffee(type);

        for (const option of options) {
            switch (option.toLowerCase()) {
                case "milk":
                    if (!this.inventory.useIngredient('milk', 1)) {
                        throw new Error("Out of milk");
                    }
                    coffee = new WithMilk(coffee);
                    break;
                case "sugar":
                    if (!this.inventory.useIngredient('sugar', 1)) {
                        throw new Error("Out of sugar");
                    }
                    coffee = new WithSugar(coffee);
                    break;
            }
        }

        const order = {
            type,
            options,
            cost: coffee.getCost(),
            description: coffee.getDescription(),
            timestamp: new Date()
        };

        const id = await this.db.saveOrder(order);
        return { id, coffee };
    }

    async getOrderHistory(): Promise<any[]> {
        return await this.db.getAllOrders();
    }
    
}
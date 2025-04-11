// Demo/MainMenu.ts
import { CoffeeShop } from '../services/CoffeeShop';
import * as readline from 'readline';
import { InventoryManager } from '../services/InventoryManager';

class MainMenu {
    private shop: CoffeeShop;
    private rl: readline.Interface;

    constructor() {
        this.shop = new CoffeeShop();
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    public async showMenu(): Promise<void> {
        while (true) {
            console.log('\n=== Coffee Shop Main Menu ===');
            console.log('1. Order Coffee');
            console.log('2. View Order History');
            console.log('3. Check Inventory');
            console.log('4. Exit');

            const choice = await this.askQuestion('Choose an option: ');

            switch (choice) {
                case '1':
                    await this.orderCoffee();
                    break;
                case '2':
                    await this.viewHistory();
                    break;
                case '3':
                    this.checkInventory();
                    break;
                case '4':
                    this.rl.close();
                    return;
                default:
                    console.log('Invalid option, please try again.');
            }
        }
    }

    private async orderCoffee(): Promise<void> {
        console.log('\n=== Available Coffee Types ===');
        console.log('1. Espresso ($2.50)');
        console.log('2. Latte ($3.00)');

        const coffeeType = await this.askQuestion('Select coffee type (1-2): ');
        let type: string;

        switch (coffeeType) {
            case '1': type = 'espresso'; break;
            case '2': type = 'latte'; break;
            default:
                console.log('Invalid selection');
                return;
        }

        console.log('\n=== Available Customizations ===');
        console.log('1. Milk (+$0.50)');
        console.log('2. Sugar (+$0.30)');
        console.log('3. No more customizations');

        const customizations: string[] = [];
        while (true) {
            const choice = await this.askQuestion('Add customization (1-3): ');

            switch (choice) {
                case '1':
                    customizations.push('milk');
                    console.log('Milk added');
                    break;
                case '2':
                    customizations.push('sugar');
                    console.log('Sugar added');
                    break;
                case '3':
                    try {
                        const order = await this.shop.orderCoffee(type, customizations);
                        console.log(`\nOrder placed! ID: ${order.id}`);
                        console.log(`Description: ${order.coffee.getDescription()}`);
                        console.log(`Total Cost: $${order.coffee.getCost().toFixed(2)}`);
                    } catch (error) {
                        console.error(`Error: ${error instanceof Error ? error.message : error}`);
                    }
                    return;
                default:
                    console.log('Invalid selection');
            }
        }
    }

    private async viewHistory(): Promise<void> {
        console.log('\n=== Order History ===');
        try {
            const history = await this.shop.getOrderHistory();
            if (history.length === 0) {
                console.log('No orders yet.');
                return;
            }

            history.forEach(order => {
                console.log(`\nOrder #${order.id}`);
                console.log(`Type: ${order.type}`);
                console.log(`Customizations: ${order.options.join(', ') || 'None'}`);
                console.log(`Cost: $${order.cost.toFixed(2)}`);
                console.log(`Date: ${new Date(order.timestamp).toLocaleString()}`);
            });
        } catch (error) {
            console.error(`Error: ${error instanceof Error ? error.message : error}`);
        }
    }

    // demo/MainMenu.ts
private checkInventory(): void {
    console.log('\n=== Current Inventory ===');
    const inventoryManager = InventoryManager.getInstance();
    console.log('InventoryManager instance:', inventoryManager);

    console.log('Milk:', this.getStock('milk'), 'units');
    console.log('Sugar:', this.getStock('sugar'), 'units');
    console.log('Coffee Beans:', this.getStock('coffee_beans'), 'units');
}

private getStock(ingredient: string): number {
    return InventoryManager.getInstance().checkStock(ingredient);
}
    private askQuestion(question: string): Promise<string> {
        return new Promise(resolve => {
            this.rl.question(question, answer => {
                resolve(answer.trim());
            });
        });
    }
}

// Execute the menu
(async () => {
    await new MainMenu().showMenu();
})();

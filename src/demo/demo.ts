import { CoffeeShop } from '../services/CoffeeShop'; 

async function runDemo() {
    const shop = new CoffeeShop();
    
    try {
        // Passer une commande
        const order1 = await shop.orderCoffee("latte", ["milk", "sugar"]);
        console.log("Order 1:", order1.coffee.getDescription(), "$" + order1.coffee.getCost());

        // Voir l'historique
        const history = await shop.getOrderHistory();
        console.log("Order History:", history);
        
    } catch (error) {
        console.error("Error:", error);
    }
}

// Initialisation et démonstration
runDemo();
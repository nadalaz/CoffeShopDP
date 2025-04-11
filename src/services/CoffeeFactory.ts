import { Coffee } from '../models/Coffee'; 
import { Espresso } from '../models/Espresso';
import { Latte } from '../models/Latte';

export class CoffeeFactory {
    static createCoffee(type: string): Coffee {
        switch (type.toLowerCase()) {
            case "espresso":
                return new Espresso();
            case "latte":
                return new Latte();
            default:
                throw new Error(`Unknown coffee type: ${type}`);
        }
    }
}
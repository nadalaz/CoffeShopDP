import { Coffee } from './Coffee';

export class Latte implements Coffee {
    getCost() { return 3.0; }
    getDescription() { return "Latte"; }
}

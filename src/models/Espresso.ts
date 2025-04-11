import { Coffee } from './Coffee';

export class Espresso implements Coffee {
    getCost() { return 2.5; }
    getDescription() { return "Espresso"; }
}
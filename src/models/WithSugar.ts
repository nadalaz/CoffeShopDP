import { Coffee } from './Coffee';
import { CoffeeDecorator } from './CoffeeDecorator';

export class WithSugar extends CoffeeDecorator {
    getCost() { return this.coffee.getCost() + 0.3; }
    getDescription() { return `${this.coffee.getDescription()}, Sugar`; }
}
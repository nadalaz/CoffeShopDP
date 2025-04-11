import { CoffeeDecorator } from './CoffeeDecorator';


export class WithMilk extends CoffeeDecorator {
    getCost() { return this.coffee.getCost() + 0.5; }
    getDescription() { return `${this.coffee.getDescription()}, Milk`; }
}
import { Coffee } from './Coffee';


export abstract class CoffeeDecorator implements Coffee {
    constructor(protected coffee: Coffee) {}
    abstract getCost(): number;
    abstract getDescription(): string;
}
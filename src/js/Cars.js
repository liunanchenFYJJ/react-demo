class Cars {
    constructor(name) {
        this.name = name ? name : 'porsche';
    }

    get getName() {
        return this.name;
    }

    set setName(name) {
        this.name = name;
    }

    sayName() {
        return `i am ${this.name}`;
    }
}

class Civic extends Cars {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    get getColor() {
        return this.color;
    }

    set setColor(color) {
        this.color = color;
    }

    pointColor() {
        console.log(`${this.name} is ${this.color}`);
    }

    sayName() {
        console.log(`hh, i am ${this.name}`);
    }
}

export { Cars, Civic }
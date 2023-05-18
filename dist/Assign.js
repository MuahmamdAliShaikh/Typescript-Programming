"use strict";
class Vehicle {
    constructor(name, model, year, rented) {
        this._name = name;
        this._model = model;
        this._year = year;
        this._rented = rented;
    }
    rent() {
        if (this._rented === false) {
            return ("Cars are not available for rent");
        }
        return this._rented = true;
    }
    return() {
        if (this._rented === this.rent()) {
            return this._rented = true;
        }
        return this._rented = false;
    }
    get name() {
        return this._name;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    get rented() {
        return this._rented;
    }
    set rented(newRented) {
        if (!newRented) {
            throw new Error("Category cannot be empty");
        }
        this._rented = newRented;
    }
}
class Car extends Vehicle {
    constructor(name, model, year, rented, _rentRate) {
        super(name, model, year, rented);
        this._rentRate = _rentRate;
    }
    rentalRates() {
        return this._rentRate;
    }
}
class Truck extends Vehicle {
    constructor(name, model, year, rented, _rentRate) {
        super(name, model, year, rented);
        this._rentRate = _rentRate;
    }
    rentalRates() {
        return this._rentRate;
    }
}
class Motorcycle extends Vehicle {
    constructor(name, model, year, rented, _rentRate) {
        super(name, model, year, rented);
        this._rentRate = _rentRate;
    }
    rentalRates() {
        return this._rentRate;
    }
}
let vehicle1 = new Car("Civic", "Hatchback", 2002, true, 3000);
console.log(vehicle1);
let vehicle2 = new Truck("Hino", "XL8", 1992, false, 10000000);
console.log(vehicle2);
let vehicle3 = new Motorcycle("Honda", "125", 2023, true, 120000);
console.log(vehicle3);
//# sourceMappingURL=Assign.js.map
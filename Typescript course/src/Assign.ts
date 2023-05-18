abstract class Vehicle {
    private _name: string;
    private _model: string;
    private _year: number;
    private _rented: boolean;
    constructor(
        name: string,
        model: string,
        year: number,
        rented: boolean

    ) {
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

    get name(): string {
        return this._name;

    }
    get model(): string {
        return this._model;
    }
    get year(): number {
        return this._year;
    }
    get rented(): boolean {
        return this._rented;
    }
    set rented(newRented: boolean) {
        if (!newRented) {
            throw new Error("Category cannot be empty");
        }
        this._rented = newRented;
    }
    abstract rentalRates(): number;
}
class Car extends Vehicle {
    constructor(
        name: string,
        model: string,
        year: number,
        rented: boolean,
        private _rentRate: number
    ) {
        super(name, model, year, rented)
    }
    rentalRates() {
        return this._rentRate

    }

}
class Truck extends Vehicle {
    constructor(
        name: string,
        model: string,
        year: number,
        rented: boolean,
        private _rentRate: number
    ) {
        super(name, model, year, rented)
    }
    rentalRates() {
        return this._rentRate
    }

}
class Motorcycle extends Vehicle {
    constructor(
        name: string,
        model: string,
        year: number,
        rented: boolean,
        private _rentRate: number
    ) {
        super(name, model, year, rented)
    }
    rentalRates() {
        return this._rentRate

    }
}
 let vehicle1 = new Car("Civic","Hatchback",2002,true,3000);
 console.log(vehicle1)

 let vehicle2 = new Truck("Hino","XL8",1992,false,10000000);
 console.log(vehicle2)

 let vehicle3 = new Motorcycle("Honda","125",2023,true,120000);
 console.log(vehicle3)




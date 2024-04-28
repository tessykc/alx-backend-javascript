// Import the Car class from 10-car.js
import Car from './10-car.js';
class EVCar extends Car {
    constructor(brand, motor, color, range) {
        super(brand, motor, color);
        this._range = range;
    }
    
    // Getter for range
    get range() {
        return this._range;
    }
    // Override cloneCar method to return an instance of Car
    cloneCar() {
        return new Car(this._brand, this._motor, this._color);
    }
}

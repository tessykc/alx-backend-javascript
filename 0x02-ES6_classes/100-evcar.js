// Import the Car class from 10-car.js
<<<<<<< HEAD
import Car from './10-car';

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
=======
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
>>>>>>> 2b8a404abb5a91b8c3f9bf3d24e1be046645d785
}

class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    // Method to clone a car
    cloneCar() {
        // Create a new object with the same attributes
        return new Car(this._brand, this._motor, this._color);
    }
}

// Example usage
class TestCar extends Car {}

const tc1 = new TestCar("Nissan", "Turbo", "Pink");
const tc2 = tc1.cloneCar();

console.log(tc1); // Output: Car { _brand: 'Nissan', _motor: 'Turbo', _color: 'Pink' }
console.log(tc1 instanceof TestCar); // Output: true

console.log(tc2); // Output: Car { _brand: 'Nissan', _motor: 'Turbo', _color: 'Pink' }
console.log(tc2 instanceof TestCar); // Output: true

console.log(tc1 == tc2); // Output: false (different objects)
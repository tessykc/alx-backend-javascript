class Car {
<<<<<<< HEAD
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
=======
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
>>>>>>> 2b8a404abb5a91b8c3f9bf3d24e1be046645d785
}

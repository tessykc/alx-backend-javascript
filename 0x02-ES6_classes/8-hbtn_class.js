class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Getter for size
  get size() {
    return this._size;
  }

  // Getter for location
  get location() {
    return this._location;
  }

  // Cast to Number: return the size
  valueOf() {
    return this._size;
  }

  // Cast to String: return the location
  toString() {
    return this._location;
  }
}

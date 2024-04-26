class Building {
  constructor(sqft) {
    // Verify the type of attribute during object creation
    if (typeof sqft !== 'number') {
      throw new Error('Invalid attribute type for sqft');
    }

    // Store attribute with an underscore prefix
    this._sqft = sqft;
    }

    // Getter for sqft
    get sqft() {
        return this._sqft;
    }

    // Abstract method: subclasses must override this method
    evacuationWarningMessage() {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
}

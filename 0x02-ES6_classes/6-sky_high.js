// Import the Building class from 5-building.js
import Building from './5-building.js';

class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        // Call the parent class constructor
        super(sqft);

        // Verify the type of attribute during object creation
        if (typeof floors !== 'number') {
            throw new Error('Invalid attribute type for floors');
        }

        // Store attribute with an underscore prefix
        this._floors = floors;
    }

    // Getter for floors
    get floors() {
        return this._floors;
    }

    // Override the evacuationWarningMessage method
    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors.`;
    }
}

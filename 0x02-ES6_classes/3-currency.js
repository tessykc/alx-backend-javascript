class Currency {
    constructor(code, name) {
        // Verify the type of attributes during object creation
        if (typeof code !== "string" || typeof name !== "string") {
            throw new Error("Invalid attribute types");
        }

        // Store attributes with an underscore prefix
        this._code = code;
        this._name = name;
    }

    // Getter for code
    get code() {
        return this._code;
    }

    // Setter for code
    set code(newCode) {
        if (typeof newCode !== "string") {
            throw new Error("Code must be a string");
        }
        this._code = newCode;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for name
    set name(newName) {
        if (typeof newName !== "string") {
            throw new Error("Name must be a string");
        }
        this._name = newName;
    }

    // Method to display the full currency format
    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}
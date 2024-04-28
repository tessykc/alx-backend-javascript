// Import the Currency class from 3-currency.js
import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
  // Verify the type of attributes during object creation
    if (typeof amount !== 'number' || !(currency instanceof Currency)) {
      throw new Error('Invalid attribute types');
    }
    // Store attributes with an underscore prefix
    this._amount = amount;
    this._currency = currency;
  }

  // Getter for amount
  get amount() {
    return this._amount;
  }

  // Setter for amount
  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new Error('Amount must be a number');
    }
    this._amount = newAmount;
  }

  // Getter for currency
  get currency() {
    return this._currency;
  }

  // Setter for currency
  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new Error('Currency must be an instance of Currency');
    }
    this._currency = newCurrency;
  }

  // Method to display the full price format
  displayFullPrice() {
    const { name, code } = this._currency;
    return `${this._amount} ${name} (${code})`;
  }

  // Static method to convert price based on conversion rate
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new Error('Amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}

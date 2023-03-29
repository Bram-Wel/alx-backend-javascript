import Currency from "./3-currency"; //eslint-disable-line

export default class Pricing {
  constructor(amount, currency) {
    this._amount = typeof amount === 'number' ? amount
      : (() => { throw new TypeError('Amount must be a Number'); })();
    this._currency = currency instanceof Currency ? currency
      : (() => { throw new TypeError('currency must be a Currency'); })();
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value === 'number') {
      this._amount = value;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (value instanceof Currency) {
      this._currency = value;
    } else {
      throw new TypeError('currency must be a Currency');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      const err = typeof amount === 'number' ? 'conversionRate' : 'Amount';
      throw new TypeError(`${err} must be a number`);
    }
    return amount * conversionRate;
  }
}

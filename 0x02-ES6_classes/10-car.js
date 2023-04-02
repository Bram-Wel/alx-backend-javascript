export default class Car {
  constructor(brand, motor, color) {
    [...arguments].forEach((item) => { //eslint-disable-line
      if (typeof item !== 'string') {
        throw new TypeError(`${Object.keys(item)[0]} must be a string`);
      }
    });
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor();
  }
}

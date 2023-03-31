export default class Building {
  constructor(sqft) {
    if (Building.isPrototypeOf(this.constructor) && this.evacuationWarningMessage === undefined) { // eslint-disable-line
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = typeof sqft === 'number' ? sqft : (() => { throw new TypeError('sqft must be a Number'); })();
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value === 'number') {
      this._sqft = value;
    } else {
      throw new TypeError('sqft must be a Number');
    }
  }
}

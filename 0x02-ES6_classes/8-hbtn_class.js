export default class HolbertonClass {
  constructor(size, location) {
    this._size = typeof size === 'number' ? size : (() => { throw new TypeError('size must be a Number'); })();
    this._location = typeof location === 'string' ? location : (() => { throw new TypeError('location must be a String'); })();
  }

  get size() {
    return this._size;
  }

  set size(value) {
    if (typeof value === 'number') {
      this._size = value;
    } else {
      throw new TypeError('size must be a Number');
    }
  }

  get location() {
    return this._location;
  }

  set location(value) {
    if (typeof value === 'string') {
      this._location = value;
    } else {
      throw new TypeError('location must be a String');
    }
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    } else if (hint === 'string') { // eslint-disable-line
      return this._location;
    }
    return this.toString();
  }
}

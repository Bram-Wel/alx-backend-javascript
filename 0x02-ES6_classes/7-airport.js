export default class Airport {
  constructor(name, code) {
    this._name = typeof name === 'string' ? name : (() => { throw new TypeError('name must be a String'); })();
    this._code = typeof code === 'string' ? code : (() => { throw new TypeError('code must be a String'); })();
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}

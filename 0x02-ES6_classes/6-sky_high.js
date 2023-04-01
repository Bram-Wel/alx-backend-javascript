import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = typeof floors === 'number' ? floors : (() => { throw new TypeError('floors must be a Number'); })();
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    if (value instanceof Number) {
      this._floors = value;
    } else {
      throw new TypeError('floors must be a Number');
    }
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

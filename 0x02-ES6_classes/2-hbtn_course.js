export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = typeof name === 'string' ? name : (() => { throw new TypeError('Name must be a string'); })();
    this._length = typeof length === 'number' ? length : (() => { throw new TypeError('Length must be a number'); })();
    this._students = students instanceof Array ? students : (() => { throw new TypeError('students must be Array'); })();
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (value instanceof Array) {
      this._students = value;
    } else {
      throw new TypeError('students must be Array');
    }
  }
}

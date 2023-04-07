export default function createInt8TypedArray(length, position, value) {
  /* Array.prototype.forEach.call(arguments, // eslint-disable-line prefer-rest-params
    (arg) => { throw new TypeError(`${Object.keys(arg)} must be a number`); }); */
  const buffer = new ArrayBuffer(length);
  const dataview = new DataView(buffer);
  try {
    dataview.setInt8(position, value);
  } catch (err) {
    if (err instanceof RangeError) {
      throw new Error('Position outside range');
    } else {
      throw err;
    }
  }
  return dataview;
}

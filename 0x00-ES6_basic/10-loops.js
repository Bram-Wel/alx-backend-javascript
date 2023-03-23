export default function appendToEachArrayValue(array, appendString) {
  const temp = [];
  for (let idx of array) {
    idx = appendString + idx;
    temp.push(idx);
  }

  return temp;
}

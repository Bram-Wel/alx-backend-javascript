export default function setFromArray(array) {
  let temp;
  if (Array.isArray(array)) {
    temp = new Set(array);
  }
  return temp;
}

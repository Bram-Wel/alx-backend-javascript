export default function cleanSet(set, startString) {
  let str = '';
  set.forEach((element) => {
    if (startString && element && element.startsWith(startString)) {
      str = str.concat('-', element.slice(startString.length));
      // console.log(`DEBUG: ${element}`);
    }
  });
  return str.slice(1);
}

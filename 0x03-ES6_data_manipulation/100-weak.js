export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let no = weakMap.get(endpoint);
  if (no > 4) {
    throw new Error('Endpoint load is high');
  } else if (no) {
    weakMap.set(endpoint, ++no); // eslint-disable-line no-plusplus
  } else {
    weakMap.set(endpoint, 1);
  }
}

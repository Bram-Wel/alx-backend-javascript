export default function iterateThroughObject(reportWithIterator) {
  const text = [];
  for (const emp of reportWithIterator) {
    text.push(emp);
  }
  return text.join(' | ');
}

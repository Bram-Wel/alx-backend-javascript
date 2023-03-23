export default function createIteratorObject(report) {
  let employeeList = [];
  Object.values(report.allEmployees).forEach((el) => {
    employeeList = [...employeeList, ...el];
  });
  const reportIterator = {
    [Symbol.iterator]() {
      let counter = 0;
      return {
        next() {
          if (counter < employeeList.length) {
            const value = employeeList[counter];
            counter++; // eslint-disable-line
            return { done: false, value };
          }
          return { done: true, value: undefined };
        },
      };
    },
  };
  return reportIterator;
}

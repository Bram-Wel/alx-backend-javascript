import getStudentsByCity from "./2-get_students_by_loc"; // eslint-disable-line quotes

export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsByCity = getStudentsByCity(students, city);
  return studentsByCity.map((student) => {
    /* eslint no-param-reassign: ["error", { "props": false }] */
    const temp = newGrades.filter((item) => item.studentId === student.id).pop();
    student.grade = temp === undefined ? 'N/A' : temp.grade;
    return student;
  });
}

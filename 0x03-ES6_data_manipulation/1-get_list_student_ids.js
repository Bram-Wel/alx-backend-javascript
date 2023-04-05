export default function getListStudentIds(students) {
  const studentIds = Array.isArray(students) ? students.map(({ id }) => id) : [];
  return studentIds;
}

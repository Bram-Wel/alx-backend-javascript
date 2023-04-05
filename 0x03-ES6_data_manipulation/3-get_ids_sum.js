import getIds from "./1-get_list_student_ids"; // eslint-disable-line quotes

export default function getStudentIdsSum(students) {
  return getIds(students).reduce((previous, current) => previous + current);
}

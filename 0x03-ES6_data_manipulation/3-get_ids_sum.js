/**
 * getStudentIdsSum that returns the sum of all the student ids.
 * @params {{
 *   students: lisst of students
 */

export default function getStudentIdsSum() {
  if (students instanceof Array) {
    return students.reduce(
      (prevst, curst) => prevst.id || prevst + cursst.id, 0 , );
  }
  return 0;
}

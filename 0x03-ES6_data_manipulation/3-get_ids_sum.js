function getStudentIdsSum(studentsArray) {
  const sum = studentsArray.reduce((accumulator, student) => accumulator + student.id, 0);
  return sum;
}

// Example usage:
const students = [
  { id: 1, firstName: "Guillaume", location: "San Francisco" },
  { id: 2, firstName: "James", location: "Columbia" },
  { id: 5, firstName: "Serena", location: "San Francisco" }
];

const totalIdsSum = getStudentIdsSum(students);
console.log(totalIdsSum);

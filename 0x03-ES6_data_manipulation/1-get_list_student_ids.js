function getListStudentIds(studentsArray) {
  if (!Array.isArray(studentsArray)) {
    return []; // Return empty array if argument is not an array
  }
  const studentIds = studentsArray.map(student => 
    student.id);
    return studentIds;
}

const students = [
  { id: 1, firstName: "Guillaume", location: "San Francisco" },
  { id: 2, firstName: "James", location: "Columbia" },
  { id: 5, firstName: "Serena", location: "San Francisco" }
];

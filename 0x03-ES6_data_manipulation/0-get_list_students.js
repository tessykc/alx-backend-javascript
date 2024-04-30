function getListStudents() {
  const students = [
    {id: 1, firstName: "Guillaume",location:
    "San Francisco"},
    {id: 2, firstName: "James",location:
    "Columbia"},
    {id: 3, firstName: "Serena", location:
    "San Francisco"}
  ];
  return students;
}

const studentList = getListStudents();
studentList.forEach(student => {
    console.log(`ID: ${student.id}, Name: ${student.firstName}, Location: ${student.location}`);
});

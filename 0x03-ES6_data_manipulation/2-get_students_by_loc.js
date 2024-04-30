function getStudentsByLocation(studentsArray, city) {
    const filteredStudents = studentsArray.filter(student => student.location === city);
    return filteredStudents;
}

// Example usage:
const students = [
    { id: 1, firstName: "Guillaume", location: "San Francisco" },
    { id: 2, firstName: "James", location: "Columbia" },
    { id: 5, firstName: "Serena", location: "San Francisco" }
];

const sanFranciscoStudents = getStudentsByLocation(students, 'San Francisco');
console.log(sanFranciscoStudents);
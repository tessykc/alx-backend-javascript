function updateStudentGradeByCity(studentsArray, city, newGrades) {
    const updatedStudents = studentsArray.map(student => {
        const matchingGrade = newGrades.find(grade => grade.studentId === student.id);
        if (matchingGrade) {
            student.grade = matchingGrade.grade;
        } else {
            student.grade = "N/A";
        }
        return student;
    });

    const filteredStudents = updatedStudents.filter(student => student.location === city);
    return filteredStudents;
}

// Example usage:
const students = [
    { id: 1, firstName: "Guillaume", location: "San Francisco" },
    { id: 2, firstName: "James", location: "Columbia" },
    { id: 5, firstName: "Serena", location: "San Francisco" }
];

const newGrades = [
    { studentId: 1, grade: 86 },
    { studentId: 5, grade: 97 }
];

const updatedSanFranciscoStudents = updateStudentGradeByCity(students, "San Francisco", newGrades);
console.log(updatedSanFranciscoStudents);
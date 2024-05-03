var teacher3 = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false, // Additional attribute without specifying its name
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
// Example implementation of the function
var printTeacher = function (firstName, lastName) {
    var firstInitial = firstName.charAt(0).toUpperCase();
    return "".concat(firstInitial, ". ").concat(lastName);
};
// Example usage
var fullName = printTeacher("John", "Doe");
console.log(fullName); // Output: "J. Doe"
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    Student.prototype.displayName = function () {
        return this.firstName;
    };
    return Student;
}());
// Example usage
var student1 = new Student('John', 'Doe');
console.log(student1.workOnHomework()); // Output: "Currently working"
console.log(student1.displayName()); // Output: "John"

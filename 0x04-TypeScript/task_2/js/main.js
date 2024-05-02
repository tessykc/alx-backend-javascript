// Implement the Director class
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getToWork = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
// Implement the Teacher class
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
// Create the createEmployee function
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
// Define the isDirector function (type predicate)
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
// Define the executeWork function
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
// Test cases
console.log(createEmployee(200)); // Output: Teacher
console.log(createEmployee(1000)); // Output: Director
console.log(createEmployee('$500')); // Output: Director
// Test cases
console.log(executeWork(createEmployee(200))); // Output: Getting to work
console.log(executeWork(createEmployee(1000))); // Output: Getting to director tasks
// Define the teachClass function
function teachClass(todayClass) {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    else if (todayClass === "History") {
        return "Teaching History";
    }
    else {
        return "Invalid subject";
    }
}
// Test cases
console.log(teachClass("Math")); // Output: Teaching Math
console.log(teachClass("History")); // Output: Teaching History

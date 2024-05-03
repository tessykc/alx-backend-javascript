interface Teacher {
    firstName: string; // Modifiable only during initialization
    lastName: string; // Modifiable only during initialization
    fullTimeEmployee: boolean; // Always defined
    yearsOfExperience?: number; // Optional
    location: string; // Always defined
    [key: string]: any; // Allow any additional attributes
}

const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false, // Additional attribute without specifying its name
};

console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Example implementation of the function
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    const firstInitial = firstName.charAt(0).toUpperCase();
    return `${firstInitial}. ${lastName}`;
};

// Example usage
const fullName = printTeacher("John", "Doe");
console.log(fullName); // Output: "J. Doe"

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}

class Student implements StudentClass {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

// Example usage
const student1 = new Student('John', 'Doe');
console.log(student1.workOnHomework()); // Output: "Currently working"
console.log(student1.displayName()); // Output: "John"

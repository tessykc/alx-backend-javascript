// Java.ts

namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject implements Subjects.TeachingJava {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }
  }
  // Method to get available teacher for Java
  getAvailableTeacher(teacher: Teacher): string {
    if (teacher.experienceTeachingJava) {
      return `Available Teacher: ${teacher.firstName}`;
    } else {
      return "No available teacher";
    }
    }
}
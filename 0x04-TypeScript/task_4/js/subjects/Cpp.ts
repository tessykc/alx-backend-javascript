// Cpp.ts

namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number; // Optional attribute
  }

  // New class: Cpp
  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp:\n- ..."; // Add actual requirements
    }

  // Method to get available teacher for Cpp
  getAvailableTeacher(teacher: Teacher): string {
    if (teacher.experienceTeachingC) {
      return `Available Teacher: ${teacher.firstName}`;
    } else {
        return "No available teacher";
    }
    }
  }
}

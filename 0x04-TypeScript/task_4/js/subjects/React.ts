// React.ts

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;   
  }
  
  export class React extends Subject implements Subject {
    // Method to get requirements for React
    getRequirements(): string {
      return "Here is the list of requirements for React"; // Add actual requirements
    }

    // Method to get available teacher for React
    getAvailableTeacher(teacher: Teacher): string {
      if (teacher.experienceTeachingReact) {
        return `Available Teacher: ${teacher.firstName}`;
      } else {
        return "No available teacher";
        }
    }
  }
}

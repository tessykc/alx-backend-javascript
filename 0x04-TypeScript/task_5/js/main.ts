// task_5/js/main.ts

// Define the MajorCredits interface
interface MajorCredits {
  credits: number;
  brand: string; // Unique identifier for MajorCredits
}

// Define the MinorCredits interface
interface MinorCredits {
  credits: number;
  brand: string; // Unique identifier for MinorCredits
}

// Function to sum major credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: "MajorCredits" };
}

// Function to sum minor credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: "MinorCredits" };
}

const mathMajor: MajorCredits = { credits: 4, brand: "Math" };
const physicsMajor: MajorCredits = { credits: 3, brand: "Physics" };

const englishMinor: MinorCredits = { credits: 2, brand: "English" };
const historyMinor: MinorCredits = { credits: 2, brand: "History" };

const totalMajorCredits = sumMajorCredits(mathMajor, physicsMajor);
const totalMinorCredits = sumMinorCredits(englishMinor, historyMinor);

console.log("Total Major Credits:", totalMajorCredits.credits, totalMajorCredits.brand);
console.log("Total Minor Credits:", totalMinorCredits.credits, totalMinorCredits.brand);// task_5/js/main.ts



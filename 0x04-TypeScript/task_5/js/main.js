// task_5/js/main.ts
// Function to sum major credits
function sumMajorCredits(subject1, subject2) {
    var totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, brand: "MajorCredits" };
}
// Function to sum minor credits
function sumMinorCredits(subject1, subject2) {
    var totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, brand: "MinorCredits" };
}
var mathMajor = { credits: 4, brand: "Math" };
var physicsMajor = { credits: 3, brand: "Physics" };
var englishMinor = { credits: 2, brand: "English" };
var historyMinor = { credits: 2, brand: "History" };
var totalMajorCredits = sumMajorCredits(mathMajor, physicsMajor);
var totalMinorCredits = sumMinorCredits(englishMinor, historyMinor);
console.log("Total Major Credits:", totalMajorCredits.credits, totalMajorCredits.brand);
console.log("Total Minor Credits:", totalMinorCredits.credits, totalMinorCredits.brand); // task_5/js/main.ts

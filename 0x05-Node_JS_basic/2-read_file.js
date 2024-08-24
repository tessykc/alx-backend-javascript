// 2-read_file.js
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line !== ''); // Remove empty lines

    const students = {};
    const fields = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
      const studentData = lines[i].split(',');
      const field = studentData[fields.length - 1];

      if (!students[field]) {
        students[field] = [];
      }

      students[field].push(studentData[0]);
    }

    console.log(`Number of students: ${lines.length - 1}`);

    for (const field in students) {
      console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

const fs = require('fs').promises;

async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter(line => line !== '');

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

    return students;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;

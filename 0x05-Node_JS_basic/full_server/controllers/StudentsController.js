const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then(students => {
        res.status(200).send(`This is the list of our students\n${Object.entries(students)
          .sort(([fieldA], [fieldB]) => fieldA.localeCompare(fieldB))
          .map(([field, studentsList]) => `Number of students in ${field}: ${studentsList.length}. List: ${studentsList.join(', ')}`)
          .join('\n')}`);
      })
      .catch(error => {
        res.status(500).send(error.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const major = req.params.major;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(process.argv[2])
      .then(students => {
        if (!students[major]) {
          res.status(500).send('Cannot load the database');
        } else {
          res.status(200).send(`List: ${students[major].join(', ')}`);
        }
      })
      .catch(error => {
        res.status(500).send(error.message);
      });
  }
}

module.exports = StudentsController;

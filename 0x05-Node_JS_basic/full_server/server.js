const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;

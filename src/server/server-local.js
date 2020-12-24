'use strict';

const app = require('./src/server/server');

const port = process.env.PORT || 8081;
const server = app.listen(port, listening);

function listening() {
  console.log(`server running on localhost: ${port}`);
  console.log(`http://localhost:${port}/`);
}
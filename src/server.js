const express = require("express");
const bodyParser = require("body-parser");
const routes = require('./routes');
const connection = require('./db/connection');

const app = express();

app.use(bodyParser.json());
app.use('/', routes);

const port = process.env.PORT || 3001;

app.listen(port, async () =>{ 
  console.log(`Server listening on port ${port}`)
  const [result] = await connection.execute('SELECT 1');
  if (result) {
    console.log('MySQL connection OK');
  }
});

const express = require("express");
const bodyParser = require("body-parser");
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use('/', routes);

const port = process.env.PORT || 3001;

app.listen(port, async () => console.log(`Server listening on port ${port}`));

const express = require('express')
const cors = require("cors");
const app = express()
const middleware = cors();

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const port = 4000
const cpuUsage = require('./api/cpuUsage')

app.use(middleware);
app.use(jsonParser);
app.use(cpuUsage);
app.listen(port, () => console.log(`Listening on : ${port}`));
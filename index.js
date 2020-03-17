const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const port = 4000

app.use(jsonParser);
app.listen(port, () => console.log(`Listening on : ${port}`));
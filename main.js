const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require("./routers/router.js")

app.use(bodyParser.json());

app.use('/hero', router)

app.listen(8000, console.log("data"))


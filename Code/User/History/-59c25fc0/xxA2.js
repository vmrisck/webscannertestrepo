const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");

const PORT = process.env.PORT || 8081; 

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());


app.get("/", (req, res) => { res.send("It's alive!") });    // Testing service

app.get('/listUsers', (req, res) => {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', (err, data) => {
      res.end( data );
   });
})

const server = app.listen(PORT, () => {
   const host = server.address().address
   const port = server.address().port
   console.log("Ticker api listening at http://%s:%s", host, port)
})
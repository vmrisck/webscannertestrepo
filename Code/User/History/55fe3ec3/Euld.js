const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require("child_process");
const fs = require("fs");
const cors = require('cors');
var serveStatic = require('serve-static')

require('dotenv').config({ path: '../.env' })

const PORT = process.env.APIPORT || 8081; 
const baseDir = process.env.baseDir;

const app = express();

/* app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
      return res.send(200);
    } else {
      return next();
    }
 }); */

/* app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'accept, authorization, content-type, x-requested-with');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.setHeader('Access-Control-Allow-Origin', '*');

    next();
}); */

app.use(express.static("public"))
// app.use('/static', express.static(path.join(__dirname, 'public')))
/* app.use(express.static("public", {
    index: false,
    setHeaders: (res, path) => {
        //res.setHeader('Content-Disposition', contentDisposition(path))
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    }
  }
)); */

/* app.use(serveStatic('public', { 
    index: false,
    setHeaders: (res, path) => {
        //res.setHeader('Content-Disposition', contentDisposition(path))
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    }
})) */


app.use(cors({ origin: '*' }));
app.options('*', cors());

app.use(bodyParser.json());


app.get("/", (req, res) => { res.send("It's alive!\n") });    // Testing service

// Test impl fs read
app.get('/listUsers', (req, res) => {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', (err, data) => {
      res.end( data );
   });
})


app.get('/scanResults', (req, res) => {
    fs.readFile( __dirname + "/" + "scanResults.js", 'utf8', (err, data) => {
       res.end( data );
    });
 })


app.get('/listLogs', (req, res) => {
    //require('node-dir').files(__dirname, function(err, files) { res.end(files); });

    // TODO: shuf
    exec(`find ${baseDir}/data/logs/scan -type f -printf '%P\n'`, {maxBuffer: 1024 * 5000}, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        
        res.end(stdout);
        //res.json(JSON.parse(JSON.stringify(stdout)));
        //res.setHeader('Content-Type', 'application/json');
        //res.writeHead(200, {'Content-Type': 'text/plain'});
        //res.end(JSON.parse(JSON.stringify(stdout)));
    });

 })

const server = app.listen(PORT, () => {
   const host = server.address().address
   const port = server.address().port
   console.log("Ticker api listening at http://%s:%s", host, port)
})
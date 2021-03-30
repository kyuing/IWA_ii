/**
 * [npm sintalled so far]
 * npm init
 * npm install --save nodemon / npm install -g nodemon / npm install -g --save nodemon
 * npm i --save axios
 * npm i --save morgan cors express body-parser
 * npm i --save multer fs path del
 * 
 * [To run index.js, on terminal based on pwd is /] 
 * npm start
 * 
 * - Since nomdemon and axios is installed for a better dev environment in running server, 
 * - anything inside index.js will run with the command above.
 * - Other files can be run by the command "node [file name]" within a correct path.
 * - Otherwise, just copy and paste any other codes into this index.js and type "npm start" on terminal at this root path level 
 */

const http = require('http'),
axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'); //mongoose module to use mongodb

var app = express();
var port = 8000;

// Middlewares 
app.use(bodyParser.json());
app.use(logger('dev'));   // app.use(logger('tiny'));
app.use(require('./routes'));  //import routes.js


app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});

const dbURI = "mongodb://localhost/test";
// https://27017-amber-spoonbill-0ngirk36.ws-eu03.gitpod.io/
// const dbURI = "27017-amber-spoonbill-0ngirk36.ws-eu03.gitpod.io/";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));
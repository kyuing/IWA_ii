/**
 * [npm sintalled so far]
 * npm init
 * npm install --save nodemon / npm install -g nodemon / npm install -g --save nodemon
 * npm i --save axios
 * npm i --save morgan cors express body-parser
 * npm i --save multer fs path del
 * npm i --save dotenv
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
dotenv = require('dotenv'),
mongoose = require('mongoose'); //mongoose module to use mongodb

var app = express();
var port = 8000;

// Middlewares 
dotenv.config();
app.use(bodyParser.json());
app.use(logger('tiny'));   // app.use(logger('dev'));
app.use(require('./routes'));  //import routes.js


/*********************************************************************************
// no need to create a server for now.

http.createServer((req, res)=>{
  res.write(users.join(", ")); //display the list of users on the page
//   res.write("\n\n"+emails.join(", ")); //display the list of users on the page
  res.end(); //end the response
}).listen(8000); // listen for requests on port 8000
 ********************************************************************************/

/*******************************************************************
// no need any external api for now.
let users = []; // names of users will be stored here
// let email = [];
(async function getNames(){
  try{
    const {data} = await axios.get("https://swapi.dev/api/people");
    console.log(data.results);
    users = data.results.map(user=>user.name);
    // emails = data.map(email=>email.email);
    console.log(users);
    // console.log(emails);
  } catch(error){
    console.log(error)
  }
})();
********************************************************************/



/***********************************************************************************
//const dbURI = "mongodb://localhost/test";
mongoose.connect('mongodb://localhost/test');
//mongoose.connect('mongodb://27017-black-kingfisher-wncsgppr.ws-eu03.gitpod.io');

mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});
***********************************************************************************/

app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});

// const dbURI = "mongodb://localhost/test";
const dbURI = process.env.DB_URL;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));
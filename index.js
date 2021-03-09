/**
 * [npm sintalled so far]
 * npm init
 * npm install --save nodemon / npm install -g nodemon / npm install -g --save nodemon
 * npm i --save axios
 * npm i --save morgan cors express body-parser
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
bodyParser = require('body-parser');

var app = express();
var port = 8000;

// Middlewares 
app.use(bodyParser.json());
app.use(logger('dev'));   // app.use(logger('tiny'));
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

app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});
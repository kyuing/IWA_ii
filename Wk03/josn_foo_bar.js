/**
 * an example of retrieving run time JSON data using such /:foo/:bar at URL level.
 *                    
 * [To run this file, on terminal based on pwd is /] 
 * cd Wk03 
 * node josn_foo_bar.js
 */ 

const http = require('http'),
axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser');

var app = express();
var port = 8000;

app.use(bodyParser.json())

/**
 * An error found is that
 * the following function work only
 * when the root path is specified as follows:
 * 
  app.get('/', (req, res) => {
      res.json({message: 'Hello BScBest!', data: [
          req.params.foo,
          req.params.bar
      ]});
  });

 * In other words, retrieving a run time JSON key-value data based on '/hello/:foo/:bar' on the browser
 * does not work, showing "Cannot GET /"
 * 
 * It can be an error on Windows 10 based gitpod environment or such a static path is needed 
 */
app.get('/hello/:foo/:bar', (req, res) => {
    res.json({message: 'Hello BScBest!', data: [
        req.params.foo,
        req.params.bar
    ]});
});

/*********************************************************************************
// no need to create a server

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
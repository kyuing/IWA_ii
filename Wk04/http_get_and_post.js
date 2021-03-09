/**
 * HTTP GET and POST example 
 *                    
 * [To run this file, on terminal based on pwd is /] 
 * cd Wk04 
 * node http_get_and_post.js
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
 * an example of HTTP GET request
 * (retrieving run time JSON data using such /:foo/:bar at URL level.)
 * 
 * the following function will output 
 * a dynamic JSON data that is filled on URL at runtime
 * 
 * run server and enter URL ending in /hello/[param you wanna send]/[param you wanna send]
 * e.g.
 * type https://8000-ivory-mouse-ynrlw1df.ws-eu03.gitpod.io/hello/param1/param2
 * 
 */
app.get('/hello/:foo/:bar', (req, res) => {
    res.json({message: 'Hello BScBest!', data: [
        req.params.foo,
        req.params.bar
    ]});
});

/**
 * post request example.
 * 
 * - run this file (run server)
 * - go to your API like POSTMAN
 * - enter URL ending in /hello
 * - In your API page, you can test sending a POST request with JSON format at backend level
 */
app.post('/hello', (req, res) => {
    res.json({result: 'post sent!', data: req.body});
});


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
/**
 * an example of retrieving data from an external api; starwars stuff.
 * resource ref: https://swapi.dev/ which is actually https://swapi.dev/api/people
 *                            
 * [To run this file, on terminal based on pwd is /] 
 * cd Wk03 
 * node swapi_dev_api.js
 */ 


const http = require('http');
const axios = require('axios');

http.createServer((req, res) => {
  res.write(users.join("\n")); //display the list of user names on the page
  res.end(); //end the response
}).listen(8000); // listen for requests on port 8000

//with async/await
let users = []; // names of users will be stored here
// let emails = [];  // emails of users will be stored here
(async function getNames(){
  try{
    
    //an end point of star wars external API
    const {data} = await axios.get("https://swapi.dev/api/people");  
    
    //you can retrieve any other values of a key,
    //by changing the pointer to other keys.
    users = data.results.map(user=>user.name); 
    console.log(users)
    
  } catch(error){
    console.log(error)
  }
})()

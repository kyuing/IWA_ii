/**
 * an example of retrieving data from an external api.
 * resource ref: https://jsonplaceholder.typicode.com/ 
 * 
 * JSONPlaceholder comes with a set of 6 common resources:
 * /posts	100 posts
 * /comments	500 comments
 * /albums	100 albums
 * /photos	5000 photos\
 * /todos	200 todos
 * /users	10 users    <-- https://jsonplaceholder.typicode.com/users
 *                            
 * [To run this file, on terminal based on pwd is /] 
 * cd Wk03 
 * node jsonplaceholder.js
 */ 

const http = require('http');
const axios = require('axios');

http.createServer((req, res) => {
  //res.write("Hello world \n"); // write a response
  res.write(users.join("\n")); //display the list of user names on the page
  
  //display the list of user emails on the page
  res.write("\n\n");
  res.write(emails.join("\n"));
  res.end(); //end the response
}).listen(8000); // listen for requests on port 8000

//with async/await
let users = []; // names of users will be stored here
let emails = [];  // emails of users will be stored here
(async function getNames(){
  try{
    
    //sample external API
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");  
    
    //you can retrieve any other values of a key,
    //by changing the pointer to other keys.
    users = data.map(user=>user.name); 
    emails = data.map(email=>email.email);  
  } catch(error){
    console.log(error)
  }
})()

/****************************************************************************
//without async/await
let users = []; // names of users will be stored here
axios.get("https://jsonplaceholder.typicode.com/users")
.then(({ data }) => {
  users = data.map(user => user.name); // get only the names of the users and store in an array
  console.log(users)
})
.catch(error => {
  console.log(error);
});
****************************************************************************/
/**
 * routing example 
 *                    
 * [To run this file, on terminal based on pwd is /] 
 * cd Wk04
 * cd MVC_routing
 * node server.js
 * 
 * [NOTE]
 * Running this file following above works at the path /workspace/IWA_ii/Wk04/MVC_routing/
 * 
 * However, to play with files at this path,
 * having the same env such as npm installations as the root path
 * e.g. npm i --save morgan cors express body-parse  //and so on...
 * or a correct path resolution is required when importing routes.
 * 
 * Since any files in sub diretory paths (other than whare pwd is /) are weekly-archive-purposed,
 * it's better to copy and paste codes in files you wanna see/check into any files at the root path
 * where pwd is / 
 * if seen any problem or things go complicated.
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

// if pwd is the root ('/')
// app.use(require('./routes'));  //import routes.js

// [way1] based on /workspace/IWA_ii/Wk04/MVC_routing/
app.use(require('/workspace/IWA_ii/Wk04/MVC_routing/routes'));  //import routes.js

// [way2] based on /workspace/IWA_ii/Wk04/MVC_routing/
// var routes = require('/workspace/IWA_ii/Wk04/MVC_routing/routes')
// app.use(routes);

/*************************************************************************************
// causes error
// app.use(require('./Wk04/MVC_routing/routes'));  //import routes.js
***************************************************************************************/

app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});
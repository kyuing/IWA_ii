/**
 * routing example 
 *                    
 * [To run this file, on terminal based on pwd is /] 
 * cd Wk04
 * cd MVC_routing
 * node routes.js
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

const express = require('express'),
router = express.Router();

router.get('/hello/:foo/:bar', (req, res) => {
    res.json({message: 'Hello BScBest!', data: [
        req.params.foo,
        req.params.bar
    ]});
});

router.post('/hello', (req, res) => {
    res.json({result: 'post sent!', data: req.body});
});

/* In server.js, the code 
 * app.use(require('./routes'));
 * will do a routing to the path ./routes
 * which is routes.js
 * 
 * In this routes.js,
 * ,at the moment, we wanna test HTTP GET & POST requests to see interaction between UI and POSTMAN API
 * by having get function and post function which are defined/called under const variable router
 * that is exported and works as an instace of router in server.js
 * 
 * In turn, once server runs, the program works in the following order:
 * - app.use(require('./routes')); is executed in server.js 
 * - routes.js is executed and the functions in the const variable router are able to be used 
 *   as needed at UI or at POSTMAN API 
 */
module.exports = router;  // export router 
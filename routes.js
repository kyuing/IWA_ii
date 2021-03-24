const express = require('express'),
router = express.Router();

var itemCtrl = require('./item-controller');  //ref to item-controller.js
//userCtrl = require('./user-controller');

router.get('/hello', itemCtrl.getWorld);

router.get('/hello/:foo/:bar', itemCtrl.getWorldParams);

router.post('/hello', itemCtrl.postWorld);

// router.post('/users', userCtrl.createUser);
// router.get('/users', userCtrl.getUsers);

/* In index.js, which can better be named server.js, 
 * the code 
 * app.use(require('./routes'));
 * will do a routing to the path ./routes
 * which is routes.js
 * 
 * In this routes.js,
 * ,at the moment, we wanna test HTTP GET & POST requests to see interaction between UI and POSTMAN API
 * by having get function and post function which are defined/called under const variable router
 * that is exported and works as an instace of router in index.js
 * 
 * In turn, once server runs, the program works in the following order:
 * - app.use(require('./routes')); is executed in index.js 
 * - routes.js is executed and the functions in the const variable router are able to be used 
 *   as needed at UI or at POSTMAN API 
 */
module.exports = router;  // export router 
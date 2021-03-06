const express = require('express'),
      router = express.Router();
// multer = require('multer'),
// upload = multer({ dest: module.exports.UPLOAD_PATH });

var itemCtrl = require('./item-controller');  //ref to item-controller.js
router.get('/hello', itemCtrl.getWorld);
router.get('/hello/:foo/:bar', itemCtrl.getWorldParams);
router.post('/hello', itemCtrl.postWorld);

var userCtrl = require('./user-controller'); //ref to user-controller.js    <--wk06 and wk07
router.post('/users', userCtrl.createUser); //create a user
router.get('/users', userCtrl.getUsers);  //get all users
router.get('/users/:id', userCtrl.getUser);  //get a user
router.put('/users/:id', userCtrl.updateUser);  //update a user
router.delete('/users/:id', userCtrl.deleteUser);  //delete a user


module.exports.UPLOAD_PATH = 'uploads';   //<--wk07 and wk08
var multer = require('multer'),
    upload = multer({ dest: module.exports.UPLOAD_PATH }),
    imageCtrl = require('./image-controller');
router.post('/images', upload.single('image'), imageCtrl.uploadImage);
router.get('/images', imageCtrl.getImages);
router.get('/images/:id', imageCtrl.getImage);
router.delete('/images', imageCtrl.deleteImages);
router.delete('/images/:id', imageCtrl.deleteImage);


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
// module.exports.UPLOAD_PATH = 'uploads';
module.exports = router;  // export router 

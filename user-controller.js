var User = require('./models/user')

exports.createUser = function (req, res) {
  var newuser = new User(req.body);
  newuser.save(function (err, user) {
    if (err) {
      res.status(400).json(err);
    }

    res.json(user);
  });
};

//get all users
exports.getUsers = function (req, res) {
  User.find({}, function (err, users) {
    if (err) {
      res.status(400).json(err);
    }
    res.json(users);
  });
};

//get a user
exports.getUser = function(req, res) {
  User.findOne({_id: req.params.id}, function (err, user) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(user);
  }); 
};

//update
exports.updateUser = function(req, res) {
  User.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, user) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(user);
  }); 
};

//delete
exports.deleteUser = function(req, res) {
  User.findByIdAndRemove(req.params.id, function (err, user) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(user);
  }); 
};
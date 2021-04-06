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

    // res.json(users);
    
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.write(users);
    res.end(users.toString());

    // res.writeHead(200, { 'Content-Type': 'text/html' }); //We are responding to the client that the content served back is HTML and the it exists (code 200)
    // var xml = fs.readFileSync('Books.xml', 'utf8'); //We are reading in the XML file
    // var xsl = fs.readFileSync('Books.xsl', 'utf8'); //We are reading in the XSL file
    // var doc = xmlParse(xml); //Parsing our XML file
    // var stylesheet = xmlParse(xsl); //Parsing our XSL file
    // var result = xsltProcess(doc, stylesheet); //This does our XSL Transformation
    // res.end(result.toString()); //Send the result back to the user, but convert to type string first

    
  });
};

//get a user
exports.getUser = function (req, res) {
  User.findOne({ _id: req.params.id }, function (err, user) {
    if (err) {
      res.status(400).json(err);
    }
    res.json(user);
  });
};

//update
exports.updateUser = function (req, res) {
  User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, user) {
    if (err) {
      res.status(400).json(err);
    }
    res.json(user);
  });
};

//delete
exports.deleteUser = function (req, res) {
  User.findByIdAndRemove(req.params.id, function (err, user) {
    if (err) {
      res.status(400).json(err);
    }
    res.json(user);
  });
};
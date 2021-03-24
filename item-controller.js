// get /hello
exports.getWorld = function(req,res){
    res.json({result: 'Hello Wrold from Controller'});
}

// get /hello/:foo/:bar
exports.getWorldParams = function(req,res){
    res.json({message: 'Hello BScBest!', data: [
        req.params.foo,
        req.params.bar
    ]});
};

// post /hello
exports.postWorld = function(req,res){
    res.json({result: 'Post was sent', data: req.body});
};
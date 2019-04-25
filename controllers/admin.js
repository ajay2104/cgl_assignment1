const ejs = require('ejs');
exports.get = (req,res,next) => {
    res.render((ejs.render('index')));
}

exports.add = (req,res,next) => {
    var obj = {
        name:req.body.name
    };
    res.send({result:obj});
}
var express= require('express');
var bodyparser = require('body-parser')
var app = express();
var things= require('./things.js');
app.set('view engine','pug')
app.set('views','./views')
app.use('/',function(req,res,next){
    console.log("req from things");
    next();
})
app.use('/',function(req,res,next){
    console.log("rre 2eq from things");
    next();
})
app.use('/things',things,function(req,res,next){
    console.log("req from things");
    next();
})
app.get('/views',function(req,res){
    res.render('first_view')
})
app.listen(3000,function(){
    console.log("listening to port 3000");
});
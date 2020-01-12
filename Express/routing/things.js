var  express = require('express')
//const var app = express();
var routers= express.Router();

routers.get('/:name/:id',function(req,res){
    res.send('id:'+ req.params.id + ' an name' + req.params.name);

});
routers.get('/:id([0-9]{5})',function(req,res){
    res.send('id: '+ req.params.id )
})
routers.get('*',function(req,res){
    res.send('404 not found');
})
routers.post('/',function(req,res){
    res.send("POST REQ TO THINGS");
});
 module.exports = routers;
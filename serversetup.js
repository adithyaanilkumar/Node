var http= require('http');
var server = http.createServer(function(req,res){
    console.log("the request"+ req.url);
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('hey peopole');

});
server.listen(3000,'127.0.0.1');
console.log('lisytening to port 3000');
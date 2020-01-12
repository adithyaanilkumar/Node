http= require('http');
fs = require('fs')
var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    console.log('request was made'+ req.url);
    myreadstream= fs.createReadStream(__dirname+'/readMe.txt');
    mywritestream = fs.createWriteStream(__dirname+'/writeme.txt');
    myreadstream.on('data',function(chunk){
        console.log("new chunk recieved");
        myreadstream.pipe(res);
   })
   
});
server.listen(8000,'127.0.0.1');
console.log('heloo world')
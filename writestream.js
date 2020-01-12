http= require('http');
fs = require('fs')
 myreadstream= fs.createReadStream(__dirname+'/readMe.txt');
 mywritestream = fs.createWriteStream(__dirname+'/writeme.txt');
 myreadstream.on('data',function(chunk){
     console.log("new chunk recieved");
     mywritestream.write(chunk);
})

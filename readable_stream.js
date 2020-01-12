var http =require('http');
var fs= require('fs')
var myReadStream= fs.createReadStream(__dirname+'/readMe.txt');
myReadStream.on('data',function(chunk){
   console.log('new chunck is');
   console.log(chunk);

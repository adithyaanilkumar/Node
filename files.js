var fs =require('fs');
//synchronous-during the runtime of the process
var readMe=fs.readFileSync('readMe.txt','utf8');
console.log(readMe);
fs.writeFileSync('writeme.txt',"hhello");

//asynchronous-after the process ends
fs.readFile('readMe.txt','utf8',function(err,data){console.log(data)});
//fs.writeFile('readMe.txt','hellloutf8');
//fs.unlink('readME.txt');//
fs.mkdirSync('stuff');
fs.unlink('./stuff/some.txt',function(){console.log("remove file")});
fs,rmdirSync('./styff/writeMe.txt',data);



    

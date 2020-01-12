var time=0;
var a=setInterval(() => {
    time+=2;
    console.log(time+"seconds have passed");
    if(time>2){
        clearInterval(a);
    }

    
}, 3000);
console.log(__dirname);
console.log(__filename);
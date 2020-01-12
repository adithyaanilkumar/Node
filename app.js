function placeanorder(orderno){
    console.log("order no",orderno);
    cookanddeliver(function(){
        console.log("delivered:",orderno);

    })
}
function cookanddeliver(callback){
    setTimeout(callback,5000);
}
placeanorder(1);
placeanorder(2);
placeanorder(3);
placeanorder(4);
placeanorder(5);
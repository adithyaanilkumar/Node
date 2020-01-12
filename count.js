var counter = function(arr){
    return 'there are ' + arr.length + ' elements in this array';
};
var adder = function(a,b){
    return `The sum of the two numbers is ${a+b}`;
}
var pi=3.14;
//module.exports.counter= counter;
//module.exports.adder= adder;
//module.exports.pi= pi;
//console.log(counter([1,2,3,4,5]));
module.exports={
    counter: counter,
    adder: adder,
    pi : pi,
};

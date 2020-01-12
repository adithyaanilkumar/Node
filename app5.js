var events= require('events');
var util = require('util');

var person= function(name){
    this.name=name;
}
util.inherits(person,events.EventEmitter);
var james = new person('james');
var mary = new person('mary');
var ryu = new person('ryu');
var people= [james,mary,ryu];
people.forE`ach(function(person){

}
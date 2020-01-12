var events=require('events');
var myEmitter= new events.EventEmitter();
myEmitter.on('someevent', function(ms){console.log(ms)});
myEmitter.emit('someevent','event was emitted');
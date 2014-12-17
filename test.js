var assert = require('assert')
  , clck = require('./')
  ;

clck.start('test');

assert.equal(Object.keys(clck.timers).length, 1, "clck.timers failed");

setTimeout(function(){  
  assert.equal(Math.floor(clck.time('test')/1000), 1, "clck.time('test') failed");
}, 1000);

setTimeout(function(){
  clck.stop('test', function(duration, id){
    assert.equal(Math.floor(duration/1000), 2, "clck.stop('test') failed");
  });
}, 2000);

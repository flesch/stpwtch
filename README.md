# clck.js [![Build Status](https://travis-ci.org/flesch/clck.js.svg?branch=master)](https://travis-ci.org/flesch/clck.js)

```bash
$ npm install --save clck
```

```javascript
var clock = require('clck');

// Start the timer.
clock.start('test');

// All the timers we've started are exposed via
// console.log(clock.timers);

// After a while, check how long it's been.
setTimeout(function(){
  console.log('"test" has been running for %d milliseconds', clock.time('test'));
}, 5000);

// Later, stop the timer (and execute a callback with the duration).
setTimeout(function(){
  clock.stop('test', function(duration, id){
    console.log('"%s" took %d milliseconds', id, duration);
  });
}, 10000);

```
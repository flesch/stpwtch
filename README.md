# stpwtch

A dependency free stopwatch/timer utility so simple there wasn't time for vowels.

```bash
$ npm install --save stpwtch
```

**stpwtch** is essentially a more flexible, albeit less accurate, `console.time` and it doesn't rely on `setInterval` like other implementations.

There are 3 methods exposed: `start`, `time` and `stop`. Each method can return immediately (synchronously), or use a Node-style callback (asynchronously).

The example below is written in ES6, although **stpwtch** can be used on any version of Node, or in the browser via <https://wzrd.in/standalone/stpwtch@latest>.

```javascript
'use strict';

const stpwtch = require('stpwtch');

// stpwtch.start(:id, :callback);
// Start a couple of timers. `stpwtch.start` requires that each timer has a unique ID.
console.log('stpwtch.start("sync-timer-id"):', stpwtch.start('snyc-timer-id'));
stpwtch.start('async-timer-id', (err, time) => {
  console.log('stpwtch.start("async-timer-id", callback):', time);
});

// All the timers we've started are exposed as `stpwtch.timers`.
// Because `stpwtch.timers` is just an object, and each "timer" is just the value of `Date.now()` when started, we can easily manipulate the timer.
// Here we'll pretend our timers were started 30 seconds ago.
Object.keys(stpwtch.timers).forEach(timer => {
  stpwtch.timers[timer] = stpwtch.timers[timer] - (1000 * 30);
});

// stpwtch.time(:id, :callback);
// After a while, check how long it's been since we started the timer.
console.log('"snyc-timer-id" was started %d milliseconds ago', stpwtch.time('snyc-timer-id'));
stpwtch.time('async-timer-id', (err, duration) => {
  console.log('"async-timer-id" was started %d milliseconds ago', duration);
});

// stpwtch.stop(:id, :callback);
// Later, stop the timer. This will remove the timer from `stpwtch.timers`.
console.log('"snyc-timer-id" was stopped and ran for %d milliseconds', stpwtch.stop('snyc-timer-id'));
stpwtch.stop('async-timer-id', (err, duration) => {
  console.log('"async-timer-id" was stopped and ran for %d milliseconds', duration);
});
```

## License

(The MIT License)

Copyright (c) 2016 [John Flesch](http://fles.ch).

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

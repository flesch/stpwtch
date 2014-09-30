# clck.js

```bash
$ npm install --save clck
```

```javascript
var clock = require('clck');

clock.start('test');

setTimeout(function(){
  clock.stop('test', function(duration, id){
    console.log('"%s" took %d milliseconds', id, duration);
  });
}, 5000);

```
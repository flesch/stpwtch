var timers = {};

exports.start = function(id){
  timers[id] = Date.now();
  return timers[id];
};

exports.time = function(id){
  return Date.now() - timers[id];
};

exports.stop = function(id, callback){
  var start = timers[id];
  delete timers[id];
  if (callback) {
    return callback(Date.now() - start, id);
  }
};

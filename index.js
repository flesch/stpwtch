var timers = {};

exports.start = function(id, callback) {
  timers[id] = Date.now();
  return timers[id];
};

exports.stop = function(id, callback) {
  var start = timers[id];
  delete timers[id];
  if (callback) {
    return callback(Date.now() - start, id);
  }
};

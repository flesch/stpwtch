'use strict';

module.exports = {

  timers: {},

  now: 'now' in Date && Date.now || (new Date()).getTime,

  start: function(id, callback) {
    this.timers[id] = this.now();
    return this.timers[id] && ((typeof callback === 'function') ? callback(null, this.timers[id]) : this.timers[id]);
  },

  time: function(id, callback) {
    var duration = this.timers[id] ? this.now() - this.timers[id] : null;
    return duration && ((typeof callback === 'function') ? callback(null, duration) : duration);
  },

  stop: function(id, callback) {
    var duration = this.time(id);
    return delete this.timers[id] && ((typeof callback === 'function') ? callback(null, duration) : duration);
  }

};

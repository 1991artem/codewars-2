function Event() {
    this.handlers = [];
  }
  Event.prototype.subscribe = function(handler) {
    this.handlers.push(handler);
  };
  Event.prototype.unsubscribe = function(handler) {
    let index = this.handlers.indexOf(handler);
    if (-1 !== handler) {
      this.handlers.splice(index, 1);
    }
  };
  Event.prototype.emit = function () {
    let args = arguments;
    this.handlers.forEach(function(handler) {
      handler.apply(null, args);
    });
  };

  var event = new Event();

  function f() {
    f.calls = (f.calls || 0) + 1;
    f.args = Array.prototype.slice.call(arguments);
}

event.subscribe(f);
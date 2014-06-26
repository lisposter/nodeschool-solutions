function Spy(target, method) {
  var reuslt = {count: 0};

  var fn = target[method];

  target[method] = function() {
  	reuslt.count += 1;
  	return fn.apply(this, arguments);
  }

  return reuslt;
}

module.exports = Spy
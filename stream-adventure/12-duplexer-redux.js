var duplexer = require('duplexer');
var through = require('through');

module.exports = function(counter) {
	var countries = {};
	return duplexer(through(function(buf) {
		if(!countries[buf.country]) {
			countries[buf.country] = 1;
		} else {
			countries[buf.country]++;
		}
	}, function() {
		counter.setCounts(countries);
	}), counter)
}
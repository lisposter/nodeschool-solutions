var spawn = require('child_process').spawn;
var duplexer = require('duplexer');

module.exports = function(cmd, args) {
	var exec = spawn(cmd, args);
	return duplexer(exec.stdin, exec.stdout);
}
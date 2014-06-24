var through = require('through');

var allbuf;
process.stdin.pipe(through(function(buf) {
	var u8a = new Uint8Array(buf);
	this.queue(JSON.stringify(u8a));
	this.queue('\n');
})).pipe(process.stdout);
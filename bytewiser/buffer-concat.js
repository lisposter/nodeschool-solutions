var through = require('through');

var allbuf;
process.stdin.pipe(through(function(buf) {
	if(Buffer.isBuffer(allbuf)) {
		allbuf = Buffer.concat([allbuf, buf]);
	} else {
		allbuf = buf;
	}
}, function() {
	console.log(allbuf);
}));
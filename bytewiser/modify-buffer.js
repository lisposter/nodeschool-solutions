var through = require('through');

process.stdin.pipe(through(function(buf) {
	for (var i = 0; i < buf.length; i++) {
		if(buf[i] === 46) {
			buf.write('!', i);
		}
	};
	console.log(buf);
}))
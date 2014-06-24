var through = require('through');
var split = require('split');

var count = 0;

var tr = through(function(buf) {
	if(count%2 === 1) {
		this.queue(buf.toString().toUpperCase() + '\n');
	} else {
		this.queue(buf.toString().toLowerCase());
		this.queue('\n')
	}
	count++;
});

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout)
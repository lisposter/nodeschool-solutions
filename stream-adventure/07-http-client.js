var http = require('http');
var through = require('through');


var srv = http.createServer(function(req, res) {
	req.pipe(through(function(buf) {
		this.queue(buf.toString().toUpperCase())
	})).pipe(res)
});

srv.listen(process.argv[2]);
var zlib = require('zlib');
var crypto = require('crypto');
var fs = require('fs');
var tar = require('tar');
var through = require('through');



var parser = tar.Parse();
parser.on('entry', function(e) {
	if(e.type === 'Directory') return;
	e.pipe(crypto.createHash('md5', { encoding: 'hex' })).pipe(through(function(buf) {
		this.queue(buf.toString() + ' ' + e.path + '\n');
	})).pipe(process.stdout);
})

process.stdin.pipe(crypto.createDecipher(process.argv[2], process.argv[3])).pipe(zlib.createGunzip()).pipe(parser)

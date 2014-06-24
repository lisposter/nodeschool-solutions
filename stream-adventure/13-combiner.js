var combine = require('stream-combiner');
var split = require('split');
var through = require('through');
var zlib = require('zlib');
    
module.exports = function () {
	var lib = {};
	var currentGenre = '';

    return combine(
        split(),
        through(function(buf) {
        	
        	if(buf) {
        		buf = JSON.parse(buf);
        	} else {
        		if(currentGenre) {
        			this.queue(JSON.stringify(lib[currentGenre]) + '\n');
        		}
        	}
        	if(buf.type === 'genre') {
        		if(currentGenre) {
        			this.queue(JSON.stringify(lib[currentGenre]) + '\n');
        		}

        		if(!lib[buf.name] ) {
        			lib[buf.name] = {"name": buf.name, "books": []}
        			currentGenre = buf.name;
        		}
        	} else {
        		lib[currentGenre].books.push(buf.name)
        	}
        	
        }),
        zlib.createGzip()

    )
}
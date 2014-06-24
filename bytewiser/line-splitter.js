var fs = require('fs');

var path = process.argv[2];

fs.readFile(path, function(err, data) {
	var newlinesIdx = [];
	for (var i = 0; i < data.length; i++) {
		if(data[i] == '10') {
			newlinesIdx.push(i);
		}
	};

	newlinesIdx.unshift(-1);
	for (var i = 0, j = 1; i < newlinesIdx.length; i++, j++) {
		console.log(data.slice(newlinesIdx[i] + 1, [newlinesIdx[j]]))
	};
});
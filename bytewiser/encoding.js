var data = process.argv.slice(2);

var buffer = new Buffer(data);
console.log(buffer.toString('hex'));
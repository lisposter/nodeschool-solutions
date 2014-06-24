var crypto = require('crypto');
var key = process.argv[2];

process.stdin.pipe(crypto.createDecipher('aes256', key)).pipe(process.stdout);
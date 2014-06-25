var num = process.argv[2];

var arr32 = new Uint32Array(1);

arr32[0] = num;

var arr16 = new Uint16Array(arr32.buffer);

console.log(JSON.stringify(arr16));
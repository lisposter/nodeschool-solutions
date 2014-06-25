function reduce(arr, fn, initial) {

  return (function step(idx, value) {
  	if(idx > arr.length - 1) return value;
  	return step(idx + 1, fn(value, arr[idx], idx, arr))
  })(0, initial)
}

module.exports = reduce
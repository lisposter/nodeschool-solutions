function countWords(inputWords) {
  var result = {};
  inputWords.reduce(function(prev, current, idx, arry) {
  	if(!result[current]) {
  		result[current] = 1;
  	} else {
  		result[current]++;
  	}
  	return current;
  }, null);
  return result;
}

module.exports = countWords


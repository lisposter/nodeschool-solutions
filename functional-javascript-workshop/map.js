function doubleAll(numbers) {
  var result = []
  numbers.map(function(number) {
  	result.push(number * 2);
  });
  return result
}

module.exports = doubleAll
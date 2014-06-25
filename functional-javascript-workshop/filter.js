function getShortMessages(messages) {
  var filtered = messages.filter(function(msg) {
  	if(msg.message && msg.message.length < 50) {
  		return true;
  	}
  });

  
  return filtered.map(function(msg) {
  	return msg.message;
  })
}

module.exports = getShortMessages
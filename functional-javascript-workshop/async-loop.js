function loadUsers(userIds, load, done) {
  var users = [];
  var count = 0;
  userIds.forEach(function(id, idx) {
  	load(id, function(data) {
  		users[idx] = data;
  		++count;
  		if(count === userIds.length) return done(users);
  	})
  })
  
}

module.exports = loadUsers
var rename = require('./rename')();

rename.getfiles('C:\\temp', '.js')
.then(function(matches) {
	console.log(matches);
	//fs.rename(oldPath, newPath, callback)
});
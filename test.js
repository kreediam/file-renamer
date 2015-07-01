var rename = require('./rename')();

rename.getfiles('C:\\temp', '.js')
	.then(function(matches) {
		console.log('Found ' + matches.length);
	});

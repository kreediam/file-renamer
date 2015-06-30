var rename = require('./rename')(),
	regex = /\w+.txt/;
	
function selector(value, index, collection) {
	return regex.test(value);
}

rename.getfiles('C:\\temp', regex.test)
	.then(function(matches) {
		console.log('Found ' + matches.length);
	});

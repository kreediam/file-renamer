var q = require('q'),
	readline = require('readline'),
	fs = require('fs'),
	_ = require('lodash');
	
module.exports = function() {
	
	function getfiles(path) {
		fs.readdir(path, function(err, files) {
			_.filter([4, 5, 6], function(n) {
		  		return n % 2 == 0;
			});
		});
	}
	
	fs.rename(oldPath, newPath, function(err) {
		
	});
	
	return {
		
	};
};
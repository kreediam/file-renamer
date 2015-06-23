var q = require('q'),
	readline = require('readline'),
	fs = require('fs'),
	_ = require('lodash');
	
module.exports = function() {
	
	function getfiles(path, selector) {
		var deferred = q.defer(),
			results;
		
		fs.readdir(path, function(err, files) {
			results = _.filter(files, selector);
			deferred.resolve(results);
		});
		
		return deferred.promise;
	}
	
	// fs.rename(oldPath, newPath, function(err) {
		
	// });
	
	return {
		getfiles: getfiles
	};
};
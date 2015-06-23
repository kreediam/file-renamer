var q = require('q'),
	readline = require('readline'),
	fs = require('fs'),
	lo = require('lodash');
	
module.exports = function() {
	return {
		getfiles: function(path, selector) {
			var deferred = q.defer(),
				results;

			fs.readdir(path, function(err, files) {
				console.log(files);
				
				results = lo.filter(files, selector);
				deferred.resolve(results);
			});
			
			return deferred.promise;
		}
	};
};

// fs.rename(oldPath, newPath, function(err) {		
// });

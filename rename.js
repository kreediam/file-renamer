var q = require('q'),
	readline = require('readline'),
	fs = require('fs'),
	lo = require('lodash');
	
module.exports = function() {
	return {
		getfiles: function(path, extension) {
			var deferred = q.defer(),
				results;

			fs.readdir(path, function(err, files) {		
				results = lo.filter(files, function(n) {
				  return lo.endsWith(n, extension);
				});

				deferred.resolve(results);
			});
			
			return deferred.promise;
		}
	};
};

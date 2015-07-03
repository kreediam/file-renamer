var q = require('q'),
	readline = require('readline'),
	fs = require('fs'),
	lo = require('lodash');
	
module.exports = function() {
	
	function getLast(path, extension) {
		return q.nfcall(fs.readdir, path).then(function (files) {
			var filtered = lo.filter(files, function(file) {
				return lo.endsWith(file, extension);
			});
			
			return lo(filtered.sort()).last();
		});
	}
			
	return {
		getLast: getLast
	};
};

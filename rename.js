var q = require('q'),
	fs = require('fs'),
	lo = require('lodash'),
	nextIndex;

function extractNumberFromFilename(input, index) {
	return Number(input.match(/\d+/)[index]);
}

function getLast(path, extension) {
	return getFiles(path, extension).then(function(files) {
		return lo(files.sort()).last();	
	});
}

function getFiles(path, extension) {
	return q.nfcall(fs.readdir, path).then(function (files) {
		return lo.filter(files, function(file) {
			return lo.endsWith(file, extension);
		});		
	},
	function(err){
		console.log(err);
	});
}

getLast('C:/Users/Nathan/Pictures/Saved Pictures/Drone', 'jpg')
.then(function(last) {
	return extractNumberFromFilename(last, 0) + 1;
}).then(function(next) {
	console.log(next);

	getFiles('E:/PHOTO', 'jpg')
	.then(function(files) {
		files.reverse();

		lo(files).forEach(function(file) {
			var numberPart = extractNumberFromFilename(file, 0),
				sum = numberPart + next,
				newPath ='E:/PHOTO/PICT' + lo.padLeft(sum, 6, '0') + '.jpg'; 

			fs.rename(file, newPath, function(err){
				console.log(err);
			});
		}).value();
		console.log('done');
	})
	.catch(function (error) {
		console.log(error);
	}).done();
});


//	.then(getLast)
//thing.rename('E:\PHOTO', 'jpg', lastIndex);


// var readFile = Q.nfbind(FS.readFile);
// 
// readFile("foo.txt", "utf-8").done(function (text) {
// 
// });
// 
// Q.nfapply(FS.readFile, ["foo.txt", "utf-8"]).done(function (text) {
// });
// 
// Q.nfcall(FS.readFile, "foo.txt", "utf-8").done(function (text) {
// });
// 

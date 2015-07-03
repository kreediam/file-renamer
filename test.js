var thing = require('./rename')(),
	lastFile,
	lastIndex;
// 
// thing.getfiles('C:\\temp', '.js')
// .then(function(matches) {
// 	console.log(matches);
// 	//fs.rename(oldPath, newPath, callback)
// });



thing.getLast('C:/Users/Nathan/Pictures/Saved Pictures/Drone', 'jpg')
	.then(function(last)
	{
		console.log(last);
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

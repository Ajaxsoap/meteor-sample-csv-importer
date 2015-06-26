Meteor.methods({
	'uploadFile':function(fileid,filename){
		var fs = Npm.require('fs');
		var path = Npm.require('path');
		var file = Uploads.find({_id:fileid});
		Meteor.setTimeout(function(){
			// The issue was that your filepath was looking at a non-existent location. The fix was to add an imports directory to the root of your project
			// and then do a path.join() (this combines the first value with the second) specifying the
			// current Node processes' print working directory (or, spit out your project's root directory).
			
			var filepath = path.join(process.env.PWD, '/imports/uploads-' + fileid + '-' + filename);
			CSV().from.stream(
				fs.createReadStream(filepath),
				{'escape':'\\'})
				.on('record',Meteor.bindEnvironment(function(row,index){
					Address.insert({
						'first':row[0],
						'last':row[1],
						'company':row[2],
						'address':row[3],
						'email':row[4],
						'phone':row[5]
					})
				}, function(error){
					console.log(error);
				}))
				.on('error',function(err){
					console.log(err);
				})
				.on('end',function(count){

				})
		},1000)
	}
})

Meteor.methods({
	'uploadFile':function(fileid,filename){
		// var csv = Meteor.require('CSV'); 
		var fs = Npm.require('fs');
		var path = Npm.require('path');
		var file = Uploads.find({_id:fileid});
		Meteor.setTimeout(function(){

			var filepath = path.resolve('.').split('.meteor')[0];
			CSV().from.stream(
				fs.createReadStream(filepath),
				{'escape':'\\'})
				.oDocn('record',Meteor.bindEnvironment(function(row,index){
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
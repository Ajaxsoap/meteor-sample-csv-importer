Meteor.publish('addresses',function(){
	return Address.find({},{limit:1000});
})
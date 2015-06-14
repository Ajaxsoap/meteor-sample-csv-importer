Meteor.publish('addresses',function(){
	return Address.find({},{limit:100});
})
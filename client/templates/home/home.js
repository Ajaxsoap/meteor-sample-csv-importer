Template.home.rendered = function() {

};

Template.home.helpers ({
	addresses:function(){
		return Address.find();
	}
});

Template.home.events({
	"change .myFileInput": function(evt, tmpl){
		FS.Utility.eachFile(event,function(file){
			var theFile = new FS.File(file);
			Uploads.insert(theFile,function(err,fileObj){
				if(!err){
					Meteor.call('uploadFile',fileObj._id,file.name);
				}
			})
		})
	}
});

Uploads = new FS.Collection('uploads', {
	// locally: path:  ~/Documents/Meteor-Labs/meteor-sample-csv-importer/imports.
	// remotely: /path/to/imports, relative to your domain
	stores:[new FS.Store.FileSystem("uploads",{path: "~/Documents/Meteor-Labs/meteor-sample-csv-importer/imports"})]
});

Uploads.allow({
	insert:function(){
		return true;
	},
	update:function(){
		return true;
	},
	remove:function(){
		return true;
	},
	download:function(){
		return true;
	}
})

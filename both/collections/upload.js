// var store = new FS.Store.FileSystem("uploads", {path:"/imports"});

Uploads = new FS.Collection('uploads', {
	stores:[new FS.Store.FileSystem("uploads",{path: "~/uploads"})]
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
Router.route('/', {
  name: 'home',
  waitOn:function(){
  	Meteor.subscribe('addresses');  	
  	return [];
  }
});

Router.route('/dashboard', {
  name: 'dashboard'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});

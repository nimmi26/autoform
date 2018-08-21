import './sidebar.html';
Template.usersidebar.helpers({
	userDetail(){
		return Meteor.userId();
	}
});

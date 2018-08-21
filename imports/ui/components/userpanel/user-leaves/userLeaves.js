import './userLeaves.html';
import '../../layouts/header.js';
import '../usersidebar/sidebar.js';
import Leaves from '../../../../api/leaves/leaves.js';
Template.userLeaves.onCreated(function(){
    Meteor.subscribe('leavesDetails');
});
Template.userLeaves.helpers({
	leavesDetails(){
		let userId = FlowRouter.getParam("id");
		let leavesDetails =  Leaves.find({userId:userId}).fetch();
		return leavesDetails[0];
	},
	userDetail(){
		return (Meteor.user());
	}
})

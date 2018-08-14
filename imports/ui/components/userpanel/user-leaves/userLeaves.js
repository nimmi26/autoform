import './userLeaves.html';
import '../../layouts/header.js';
import Leaves from '../../../../api/leaves/leaves.js';
Template.userLeaves.onCreated(function(){
    Meteor.subscribe('leavesDetails');
});
Template.userLeaves.helpers({
	leavesDetails(){
		let userId = FlowRouter.getParam("id");
		let leavesDetails =  Leaves.find({userId:userId}).fetch();
		console.log(leavesDetails);
		return leavesDetails[0];
	},
	userDetail(){
		return (Meteor.user());
	}
})

import './leaveNotificationHistroy.html';
import Leaves from '../../../../api/leaves/leaves.js';
Template.leaveNotificationHistroy.onCreated(function(){
    Meteor.subscribe('userList');
    Meteor.subscribe('leavesDetails');
});

Template.leaveNotificationHistroy.helpers({
	allLeaveApplications(){
		let allLeaves = [];
		_.each( Leaves.find({},{sort:{appliedDate:-1}}).fetch(),function(leaves){
			allLeaves.push({leaveDetail:leaves,userDetail:Meteor.users.findOne({_id:leaves.userId})});
		});
		
		return(allLeaves);
	},
	formateTime(date){
        return moment(date).format('MM-DD-YYYY');
    }
});

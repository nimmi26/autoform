import './allNotifications.html';
import '../../layouts/header.js';
import Leaves from '../../../../api/leaves/leaves.js';

Template.allNotifications.onCreated(function(){
    Meteor.subscribe('userList');
    Meteor.subscribe('leavesDetails');
});

Template.allNotifications.helpers({
	allLeaveApplications(){
		let allLeaves = [];
		_.each( Leaves.find({approvedOrNot:false,cancelByUser:false,cancelByAdmin:false},{sort:{appliedDate:-1}}).fetch(),function(leaves){
			allLeaves.push({leaveDetail:leaves,userDetail:Meteor.users.findOne({_id:leaves.userId})});
		});
		
		return(allLeaves);
	},
	formateTime(date){
        return moment(date).format('MM-DD-YYYY');
    }
});

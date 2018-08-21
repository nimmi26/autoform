import './employeeOnLeave.html';
import Leaves from '../../../../api/leaves/leaves.js';
Template.employeeOnLeave.onCreated(function(){
   	Meteor.subscribe('userList');
    Meteor.subscribe('leavesDetails');
});
Template.employeeOnLeave.helpers({
	employeeOnLeave(){
		let allLeaves = [];
		_.each( Leaves.find({approvedOrNot:true,appliedFrom: {$gte: new Date }},{sort:{appliedto:-1}}).fetch(),function(leaves){
			allLeaves.push({leaveDetail:leaves,userDetail:Meteor.users.findOne({_id:leaves.userId})});
		});
		return allLeaves;
	},

	formateTime(date){
        return moment(date).format('MM-DD-YYYY');
    }
});

Template.employeeOnLeave.events({
	'click .submit-button'(event){
		event.preventDefault();
        const leaveId = event.target.value;
        const leaveData = {
            leaveId: leaveId,
            admin:true
        }
        Meteor.call('cancelLeave',leaveData,function(err,res){
            if(res){
                sweetAlert("Done!",'Leave application rejected.',"success");
            }else{
                sweetAlert("Oops!","Something went wrong.","error");
            }
        });
	}
});

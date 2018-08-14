import './applyLeaves.html';
import Leaves from '../../../../api/leaves/leaves.js';
Template.applyLeaves.onCreated(function(){
    Meteor.subscribe('leavesDetails');
});
Template.applyLeaves.helpers({
	leavesDetails(){
		let userId = FlowRouter.getParam("id");
		let leavesDetails =  Leaves.find({userId:userId}).fetch();
		let leavesHistory = (leavesDetails[0])?leavesDetails[0].leaveHistory:"";
		return leavesDetails[0];
	},
	userDetail(){
		return (Meteor.user());
	},
	formateTime(date){
		
        return moment(date).format('MM-DD-YYYY');
    },
    userLeaveHistory(leaveHistoryArray){
    	var leaveObj = {};
    	if(leaveHistoryArray){
    		leaveHistoryArray.map(function(leave){
    			leaveObj.push(leave);
    		});
    		console.log(leaveObj)
    	}
    	
    }
});

Template.applyLeaves.events({
	'click .apply-leave'(event){
        event.preventDefault();
        
        const toDate = $("#toDate").val();
        const fromDate = $("#fromDate").val();
        
		var delta = Math.abs(moment(fromDate) - moment(toDate)) / 1000;
		var days = Math.floor(delta / 86400);
	
		var hours = Math.floor(delta / 3600) % 24;
		days += (hours>4)?1:0.5;
		var applyData = {
			leaveId : moment().unix(),
			toDate:toDate,
			fromDate:fromDate,
			days:days
		}
		Meteor.call('applyLeaves',applyData,function(err,res){
			if(err){
				sweetAlert("Oops!",err.reason,"error");
			}else{
				sweetAlert("Hurry!",'Leave appiled.',"success");
			}
		});
    }
});

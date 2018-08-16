import './applyLeaves.html';
import Leaves from '../../../../api/leaves/leaves.js';
Template.applyLeaves.onCreated(function(){
    Meteor.subscribe('leavesDetails');
});
Template.applyLeaves.helpers({
	leavesDetails(){
		let userId = FlowRouter.getParam("id");
		let leavesDetails =  Leaves.find({userId:userId},{sort:{appliedDate:-1}}).fetch();
		return leavesDetails;
	},
	userDetail(){
		return (Meteor.user());
	},
	formateTime(date){
        return moment(date).format('MM-DD-YYYY');
    },
    userLeaveHistory(leaveHistoryArray){
    	var leaveObj = [];
    	if(leaveHistoryArray){
    		leaveHistoryArray.map(function(leave){
    			leaveObj.push(leave);
    		});
    	}
    	return leaveObj;
    },
    cancelLeave(cancelByUser,cancelByAdmin){
    	if(cancelByAdmin||cancelByUser){
    		return true;
    	}
    	return false;
    }
});

Template.applyLeaves.events({
	'click .apply-leave'(event){
        event.preventDefault();
        
        const toDate = $("#toDate").val();
        const fromDate = $("#fromDate").val();
        const leaveReason = $("#leaveReason").val();
		var delta = Math.abs(moment(fromDate) - moment(toDate)) / 1000;
		var days = Math.floor(delta / 86400);
	
		var hours = Math.floor(delta / 3600) % 24;
		days += (hours>4)?1:0.5;
		var applyData = {
			appiledDate: new Date(),
			toDate:toDate,
			fromDate:fromDate,
			days:days,
			leaveReason:leaveReason
		}
		Meteor.call('applyLeaves',applyData,function(err,res){
			if(err){
				sweetAlert("Oops!",err.reason,"error");
			}else{
				sweetAlert("Hurry!",'Leave appiled.',"success");
			}
		});
    },

    'click .cancel_leave'(event){
    	event.preventDefault();
    	const leaveId = event.target.value;
    	const leaveData = {
    		userId: Meteor.userId(),
    		leaveId: leaveId,
    		admin:false
    	}
    	Meteor.call('cancelLeave',leaveData,function(err,res){
    		if(res){
    			sweetAlert("Done!",'You have canceled your leave.',"success");
    		}else{
    			sweetAlert("Oops!","Something went wrong.","error");
    		}
    	})
    }
});

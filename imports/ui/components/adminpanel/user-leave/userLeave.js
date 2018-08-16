import './userLeave.html';
import Leaves from '../../../../api/leaves/leaves.js';
Template.userLeave.onCreated(function(){
    Meteor.subscribe('userList');
    Meteor.subscribe('leavesDetails');
    
   
});

Template.userLeave.helpers({
    userDetail(){
        let userId = FlowRouter.getParam("id");
        let userDetail = Meteor.users.findOne({_id:userId});
        return userDetail;
    },
    leavesDetails(){
        let userId = FlowRouter.getParam("id");
        let leavesDetails = Leaves.find({userId:userId}).fetch();
        return leavesDetails;
    },
    formateTime(date){
        return moment(date).format('MM-DD-YYYY');
    },
    cancelLeave(cancelByUser,cancelByAdmin){
        if(cancelByAdmin||cancelByUser){

            return true;
        }
        return false;
    },
    seenByadmin(){
        let userId = FlowRouter.getParam("id");
        console.log(userId);
        Meteor.call("seenByAdmin",userId);
    }
});

Template.userLeave.events({
    'click .add-leave'(event){
        event.preventDefault();
        const leaves = $("#leaves").val();
        let userId = FlowRouter.getParam("id");
        Meteor.call('assignLeave',userId,leaves);
    },

    'click .cancel_leave'(event){
        event.preventDefault();
        const leaveId = event.target.value;
        const leaveData = {
            userId: FlowRouter.getParam("id"),
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
    },

    'click .approve_leave'(event){
        event.preventDefault();
        const leaveId = event.target.value;
        const totalNoOfLeaves = $("#total_no_of_leave").val();
        const leaveData = {
            userId: FlowRouter.getParam("id"),
            leaveId: leaveId,
            totalNoOfLeaves: totalNoOfLeaves
        }
        Meteor.call('approveLeave',leaveData,function(err,res){
            if(res){
                sweetAlert("Done!",'Leave application approved.',"success");
            }else{
                sweetAlert("Oops!","Something went wrong.","error");
            }
        })
    }
})

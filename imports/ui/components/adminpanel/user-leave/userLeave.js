import './userLeave.html';
import Leaves from '../../../../api/leaves/leaves.js';
Template.userLeave.onCreated(function(){
    Meteor.subscribe('userList');
    Meteor.subscribe('leavesDetails');
    // Meteor.subscribe('invitations');
});

Template.userLeave.helpers({
    userDetail(){
        let userId = FlowRouter.getParam("id");
        let userDetail = Meteor.users.findOne({_id:userId});
        return userDetail;
       
    },
    leavesDetails(){
        let userId = FlowRouter.getParam("id");
        let leavesDetails = Leaves.findOne({userId:userId});
        return leavesDetails;
    }
});

Template.userLeave.events({
    'click .add-leave'(event){
        event.preventDefault();
        const leaves = $("#leaves").val();
        let userId = FlowRouter.getParam("id");
        Meteor.call('assignLeave',userId,leaves);
        //console.log(leaves);
    }
})
import './adminHomePage.html';
import '../../layouts/header.js';
import '../all-notifications/allNotifications.js';
import  Invitations  from '../../../../api/invitations/invitations.js';
import Leaves from '../../../../api/leaves/leaves.js';
import { Meteor } from 'meteor/meteor';

Template.adminHomePage.onCreated(function(){
   Meteor.subscribe('leavesDetails');
    Meteor.subscribe('invitations');
});

Template.adminHomePage.helpers({
    invitationList(){
        const allInvitations = Invitations.find({}).fetch();
        return allInvitations;
    },
    formateTime(date){
        return moment(date).format('MM-DD-YYYY');
    },
    newNotification(){
    	return Leaves.find({seenByAdmin:false}).count();
    }
});

Template.adminHomePage.events(function(){

})

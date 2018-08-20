import './adminHomePage.html';
import '../../layouts/header.js';
import '../all-notifications/allNotifications.js';
import  Invitations  from '../../../../api/invitations/invitations.js';
import Leaves from '../../../../api/leaves/leaves.js';
import { Meteor } from 'meteor/meteor';

Template.adminHomePage.onCreated(function(){
    Meteor.subscribe('leavesDetails');
    Meteor.subscribe('invitations');
    Meteor.subscribe('userList');
});

Template.adminHomePage.helpers({
    invitationList(){
        const allUsersList = Meteor.users.find({userRole:1}).fetch();
        return allUsersList;
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

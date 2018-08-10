import './adminHomePage.html';
import '../layouts/header.js';
import  Invitations  from '../../../api/invitations/invitations.js';
import { Meteor } from 'meteor/meteor';

Template.adminHomePage.onCreated(function(){
   // Meteor.subscribe('userList');
    Meteor.subscribe('invitations');
});

Template.adminHomePage.helpers({
    invitationList(){
        const allInvitations = Invitations.find({}).fetch();
        return allInvitations;
    },
    formateTime(date){
        return moment(date).format('MM-DD-YYYY');
    }
});

Template.adminHomePage.events(function(){

})

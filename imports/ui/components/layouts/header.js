import './header.html';
import { Meteor } from 'meteor/meteor';
import './userInfoModal.js'
import '../adminpanel/add-user/addUserModal.js';
Template.header.helpers({
    getUser(){
        let userName =  Meteor.user() && Meteor.user().profile;
		return userName;
    }
});

Template.header.events({
    'click .addModal':function(event){
        let x = Meteor.user();
        Modal.show('userInfoModal',{ name: x.profile.name, role: x.profile.userRole, email: x.emails[0].address})
    },
    'click .addUserModal':function(event){
        Modal.show('addUserModal');
    }
});
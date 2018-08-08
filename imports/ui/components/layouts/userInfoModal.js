import './userInfoModal.html';
import { Meteor } from 'meteor/meteor';

Template.userInfoModal.helpers({
    
   
});

Template.userInfoModal.events({
    'click .logout':function(event){
        event.preventDefault();
        Modal.hide();
        let role =  Meteor.user().profile.role;
        Meteor.logout();
        if(role){
            FlowRouter.go('/admin');
        }else{
            FlowRouter.go('/')
        }

    }
})
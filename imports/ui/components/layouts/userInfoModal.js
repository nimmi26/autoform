import './userInfoModal.html';
import { Meteor } from 'meteor/meteor';

Template.userInfoModal.helpers({
    
   
});

Template.userInfoModal.events({
    'click .logout':function(event){
        event.preventDefault();
        Modal.hide();
        Meteor.logout(function(err){
            if(!err){
                FlowRouter.go('/')
            }
        });
        
    }
})

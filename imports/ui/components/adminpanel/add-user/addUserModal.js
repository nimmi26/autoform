import { Meteor } from 'meteor/meteor';
import './addUserModal.html';
import Invitations from '../../../../api/invitations/invitations.js';
import { AutoForm } from 'meteor/aldeed:autoform';
Template.addUserModal.helpers({
    invitations(){
        return Invitations;
    }
});

Template.addUserModal.onCreated(function () {
	Meteor.subscribe('invitations');
});


AutoForm.hooks({
    invitation: {
        onSubmit: function(doc) {
            var self = this;
            let emailVar = doc.email;
            if (emailVar)  {
                Meteor.call('checkUserInInviteCollection',emailVar,function(err,res){
                    if(res){
                        swal("Invitation already sent.");
                    }else{
                        Meteor.call("inviteUser",emailVar,function(err,res){
                            if(err){
                                swal('Oops!',err.reason,"error");
                            }else{
                                swal("Invitation sent.","","success");                        
                            }
                        })
                    }
                })
                
            }else {
               swal('Email is required',"","error");
            }
            return false;
        }
    }
})
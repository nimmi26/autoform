import { Meteor } from 'meteor/meteor';
import './addUserModal.html';
import Invitations from '../../../../api/invitations/invitations.js';
import { AutoForm } from 'meteor/aldeed:autoform';
import { Accounts } from 'meteor/accounts-base'
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
                            /*Accounts.createUser({username: emailVar, email: emailVar, password: 'initialPassword'},function(err,res){
                                var userId = res;
                                console.log(res);
                                console.log(err);
                            });
                            //console.log(userId);
                            console.log(Meteor.userId())
                            Accounts.sendEnrollmentEmail(Meteor.userId(),function(err,res){
                                console.log(err)
                                console.log(res)
                            });*/
                            if(err){
                                swal('Oops!',err.reason,"error");
                            }else{
                                Modal.hide('addUserModal');
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

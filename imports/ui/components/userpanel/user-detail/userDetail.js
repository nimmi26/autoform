import './userDetail.html';
import '../user-leaves/userLeaves.js';

import '../apply-leaves/applyLeaves.js';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { AutoForm } from 'meteor/aldeed:autoform';
Template.userDetail1.onCreated(function(){
   // Meteor.subscribe('userList');
    // Meteor.subscribe('invitations');
});

Template.userDetail1.helpers({
    userDetail(){
        let userDetail = Meteor.user();
        return userDetail;
    },
    selectedPersonDoc(){
        let userDetail = Meteor.user();
        return userDetail;
    }
});


AutoForm.hooks({
    updateUserFormByUser: {
        onSubmit: function(updatedDoc) {
            var self = this;
            
            let name = updatedDoc.profile.name;
            let birthday = updatedDoc.profile.birthday;
            let gender = updatedDoc.profile.gender;            
            updatedDoc._id = Meteor.userId();
            updatedDoc.role = Meteor.user().profile.userRole;          
            if (name && birthday && gender)  {
                
                Meteor.call('updateUser',updatedDoc,function(err,res){
                    if(res){
                        sweetAlert("User updated.","success");
                    }else{
                        sweetAlert("Oops! Something went wornd","error");
                    }
                });
            }else {
                sweetAlert("All fields are required..","error");
            }
            return false;
        }
    }
})

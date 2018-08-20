import './userDetail.html';
import '../user-leave/userLeave.js';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { AutoForm } from 'meteor/aldeed:autoform';
Template.userDetail.onCreated(function(){
    Meteor.subscribe('userList');
    // Meteor.subscribe('invitations');
});

Template.userDetail.helpers({
    userDetail(){
        let userId = FlowRouter.getParam("id");
        let userDetail = Meteor.users.findOne({_id:userId});
        return userDetail;
       
    },
    selectedPersonDoc(){
        let userId = FlowRouter.getParam("id");
        let userDetail = Meteor.users.findOne({_id:userId});
      
        return userDetail;
    }
});


AutoForm.hooks({
    updateUserForm: {
        onSubmit: function(updatedDoc) {
            var self = this;
            console.log(updatedDoc);
            let name = updatedDoc.profile.name;
            let birthday = updatedDoc.profile.birthday;
            let gender = updatedDoc.profile.gender;
            let dateOfConfrimation = updatedDoc.profile.dateOfConfrimation;
            let userId = FlowRouter.getParam("id");
            updatedDoc._id = userId;           
            if (name && birthday && gender)  {
                if(dateOfConfrimation){
                    updatedDoc.profile.confrimOrNot = true;
                    Meteor.call("assignLeave",userId,1);
                }else{
                    updatedDoc.profile.confrimOrNot = false;
                    updatedDoc.profile.dateOfConfrimation = "";
                    Meteor.call("assignLeave",userId,-1);
                }

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

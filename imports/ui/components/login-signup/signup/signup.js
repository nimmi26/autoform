import './signup.html';
import { Meteor } from 'meteor/meteor';
import Users from '../../../../api/users/users.js';
import { AutoForm } from 'meteor/aldeed:autoform';
import './createProfile.js';


Template.signup.events({
    
});

AutoForm.hooks({
    logInForm: {
        onSubmit: function(insertDoc) {
            var self = this;
            let passwordVar = insertDoc.services[0].password;
           
            userData = {
                password: passwordVar,
                createdAt: new Date(),
                token: FlowRouter.getParam("token")
            }
            if (passwordVar)  {
                Meteor.call('checkForToken',userData,function(err,res){
                    if(err){
                        sweetAlert("Oops!",err.reason,"error");
                    }else{
                        Accounts.resetPassword(userData.token, userData.password, function(err){
                            if(err){
                                sweetAlert('Oops',err.reason,'error');
                            }else{
                                FlowRouter.go('/create-profile/'+Meteor.userId());
                            }
                        })
                    }
                })
            }else {
                sweetAlert("All fields are required..","error");
            }
            return false;
        }
    }
})

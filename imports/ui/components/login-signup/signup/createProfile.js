import './createProfile.html';
import { Meteor } from 'meteor/meteor';
import Users from '../../../../api/users/users.js';
import { AutoForm } from 'meteor/aldeed:autoform';

AutoForm.hooks({
    createProfileform: {
        onSubmit: function(insertDoc) {
            var self = this;
            let name = insertDoc.profile.name;
            let birthday = insertDoc.profile.birthday;
            let gender = insertDoc.profile.gender;
           
            userData = {
                createdAt: new Date(),
                profilename:name,
                profilebirthady:birthday,
                profilegender:gender,
                userId: Meteor.userId()
            }
            if (name && birthday && gender)  {
                Meteor.call('createUserProfile',userData,function(err,res){
                    if(err){
                        sweetAlert("Oops!",err.reason,"error");
                    }else{
                        sweetAlert('Great','You have created your profile.','success');
                        FlowRouter.go('/homepage');
                    }
                })
            }else {
                sweetAlert("All fields are required..","error");
            }
            return false;
        }
    }
})

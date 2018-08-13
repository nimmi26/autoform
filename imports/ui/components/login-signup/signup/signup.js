import './signup.html';
import { Meteor } from 'meteor/meteor';
import Users from '../../../../api/users/users.js';
import { AutoForm } from 'meteor/aldeed:autoform';
Template.signup.helpers({
  
});

Template.signup.events({
    /*'submit .signup':function(event) {
        event.preventDefault();
        console.log('hi')
        /*const target = event.target;
        let name = (event.target.name.value).trim();
        let emailVar = (event.target.email.value).trim();
        let passwordVar = (event.target.password.value).trim();
        let cpassword = (event.target.cpassword.value).trim();
        if(name == "" || email == "" || password == "" || cpassword == ""){
            alert("Blanks space not allowed");
            return false;
        }else{
            Accounts.createUser({
                email: emailVar,
                password: passwordVar,
                createdAt: new Date(),
                profile:{
                    name,
                    role:0 //role 0 show that user is employee
                }
            },function(e, id){
                if(e){
                    swal(e.reason, {
                        icon: "error",
                    });
                }else{
                    sweetAlert("Accounct Created.","success");
                    FlowRouter.go('/');
                }
            });
        }*/
    //}
});

AutoForm.hooks({
    logInForm: {
        onSubmit: function(insertDoc) {
            var self = this;
            let emailVar = insertDoc.emails[0].address;
            let passwordVar = insertDoc.services[0].password;
            let name = insertDoc.profile.name;
            let birthday = insertDoc.profile.birthday;
            let gender = insertDoc.profile.gender;
            if (emailVar && passwordVar && name && birthday && gender)  {
                Meteor.call('checkUserInInviteCollection',emailVar,function(err,res){
                    if(res){
                        Accounts.createUser({
                            email: emailVar,
                            password: passwordVar,
                            createdAt: new Date(),
                            profile:{
                                name,
                                birthday,
                                gender
                            },
                        },function(e, id){
                            if(e){
                                swal(e.reason, {
                                    icon: "error",
                                });
                            }else{
                                userId = Meteor.userId();
                                console.log(id);
                                Meteor.call('updateInvitee',emailVar,userId);
                                sweetAlert("Accounct Created.","success");
                                FlowRouter.go('/admin');
                            }
                        });
                    }else{
                        sweetAlert("You are not invited by Admin. Please contact to admin");
                    }
                });
              //  alert(email,password,firstName);
               /* */
            }else {
                sweetAlert("All fields are required..","error");
            }
            return false;
        }
    }
})

import './signup.html';
import { Meteor } from 'meteor/meteor';


Template.signup.events({
    'submit .signup':function(event) {
        event.preventDefault();
        const target = event.target;
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
        }
    }
});
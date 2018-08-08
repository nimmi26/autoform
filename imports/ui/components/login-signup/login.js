import './login.html';
import { Meteor } from 'meteor/meteor';



Template.login.helpers({
    
});

Template.login.events({
	'submit .login':function(event) {
		event.preventDefault();
		let emailVar = (event.target.email.value).trim();
  	    let passwordVar = (event.target.password.value).trim();
  	    Meteor.loginWithPassword(emailVar, passwordVar,function(e,res){
            if(e){
                swal("Oops!", e.reason, "error")
            }else{
               // console.log(res)
                FlowRouter.go('/admin-home');
            }
  	    });
	}	
});

AutoForm.addHooks('loginAdmin', {
    onSubmit: function (formFields, updateDoc, currentDoc) {
        console.log('hello')
      Meteor.loginWithPassword(formFields.email, formFields.password, (error) => {
        if (error) { //TODO: dry with signup
          instance.errorText.set(error.reason);
          this.done(error);
        } else {
          this.done();
        }
      });
      return false;
    }
  });
import './login.html';
import { Meteor } from 'meteor/meteor';
import { AutoForm } from 'meteor/aldeed:autoform';


Template.login.helpers({
    
});

Template.login.events({
	/*'submit .login':function(event) {
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
	}	*/
});

AutoForm.hooks({
  	logInForm2: {
        onSubmit: function(doc) {
        	var self = this;
          
          	let emailVar = doc.emails[0].address;
			let passwordVar = doc.services[0].password;
			  
          	//Log user in with email and password
          	if (emailVar && passwordVar)  {
				
				Meteor.loginWithPassword(emailVar,passwordVar,(err)=>{
					if(!err){
						FlowRouter.go('/admin-home');
					}else{
						//("All fields are required..","error");
						//console.log(err);
						swal("Oops!", err.reason, "error")
					}
					
				})   
          	}else {
				alert('fkjvjf')
              	//sweetAlert("All fields are required..","error");
			}
        	return false;
      	}
  	}
})

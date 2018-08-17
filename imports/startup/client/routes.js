import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';

import '../../ui/pages/not-found/not-found.js';

// Set up all routes in the app
FlowRouter.route('/', {
	name: 'App.home',
	action() {
		document.title = "Login";
		BlazeLayout.render('App_body', { main: 'App_home' });
	},
});

FlowRouter.route('/signup', {
	name: 'singup',
	action() {
		document.title = "Signup";
		BlazeLayout.render('App_body', { main: 'signup' });
	},
});

// Router for user leaves
FlowRouter.route('/leaves/:id',{
	name: 'userLeaves',
	action(){
		BlazeLayout.render('App_body',{main: 'userLeaves'})
	},
});

FlowRouter.route('/homePage',{
	name: 'homePage',
	action(){
		document.title = "Admin Home";
		BlazeLayout.render('App_body', { main: 'homePage'});
	},
});

//router for admin can see user detail
FlowRouter.route('/user-detail/:id',{
	name:'adminHomePage',
	action(){
		BlazeLayout.render('App_body',{ main: 'userDetail'})
	}
});

//router for apply leaves  for loggedin user
FlowRouter.route('/applied-leaves/:id',{
	name:'',
	action(){
		BlazeLayout.render('App_body',{ main: 'applyLeaves'})
	}
});

//router for admin can see user leaves
FlowRouter.route('/user-detail/leaves/:id',{
	name:'userLeave',
	action(){
		BlazeLayout.render('App_body',{ main: 'userLeave'})
	}
});

FlowRouter.route('/leave-notifictions',{
	name: 'allNotifications',
	action(){
		BlazeLayout.render('App_body',{ main: 'allNotifications'})
	}
})

/*FlowRouter.route('/#/enroll-account/:token',{
	name: 'allNotifications',
	action(){
		BlazeLayout.render('App_body',{ main: 'allNotifications'})
	}
})*/

FlowRouter.notFound = {
	action() {
		BlazeLayout.render('App_body', { main: 'App_notFound' });
	},
};


/*AccountsTemplates.configureRoute('enrollAccount', {
	layoutType: 'blaze',
	name: 'enrollAccount',
	path: '/enroll-account',
	template: 'signup',
	layoutTemplate: 'App_body',
	redirect:'/signup'
});*/


/*Accounts.urls.enrollAccount = function (token) {
	return Meteor.absoluteUrl('enroll-account/' + token);
};*/

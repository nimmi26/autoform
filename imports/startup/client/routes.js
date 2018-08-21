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
		BlazeLayout.render('App_body', { main: 'login' });
	},
});

FlowRouter.route( '/enroll-account/:token', {
  	name: 'enroll-account',
  	action( params ) {
	    BlazeLayout.render('App_body', { main: 'signup' });
  	}
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
		document.title = "Home";
		BlazeLayout.render('App_body', { main: 'homePage'});
	},
});

FlowRouter.route('/on-leave',{
	name:'onLeave',
	action(){
		document.title = "Employee On Leave",
		BlazeLayout.render('App_body',{main: 'employeeOnLeave'})
	}
})

//router for admin can see user detail
FlowRouter.route('/user-detail/:id',{
	name:'userDetail',
	action(){
		BlazeLayout.render('App_body',{ main: 'userDetail'})
	}
});

FlowRouter.route('/leave-notifictions-history',{
	name:'leaveNotificationHistroy',
	action(){
		BlazeLayout.render('App_body',{ main: 'leaveNotificationHistroy'})
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

FlowRouter.route('/create-profile/:id',{
	name:'createProfile',
	action(){
		BlazeLayout.render('App_body',{main: 'createProfile'})
	}
})
FlowRouter.route('/leave-notifictions',{
	name: 'allNotifications',
	action(){
		BlazeLayout.render('App_body',{ main: 'allNotifications'})
	}
})

FlowRouter.route('/holiday',{
	name:'holiday',
	action(){
		BlazeLayout.render('App_body',{main:'holiday'});
	}
})

FlowRouter.notFound = {
	action() {
		BlazeLayout.render('App_body', { main: 'App_notFound' });
	},
};

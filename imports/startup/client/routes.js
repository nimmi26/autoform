import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';

import '../../ui/pages/not-found/not-found.js';

// Set up all routes in the app
FlowRouter.route('/admin', {
	name: 'App.home',
	action() {
		document.title = "Login";
		BlazeLayout.render('App_body', { main: 'App_home' });
	},
});

FlowRouter.route('/singup', {
	name: 'singup',
	action() {
		document.title = "Signup";
		BlazeLayout.render('App_body', { main: 'signup' });
	},
});

FlowRouter.route('/admin-home',{
	name: 'adminHomePage',
	action(){
		document.title = "Admin Home";
		BlazeLayout.render('App_body', { main: 'adminHomePage'});
	},
});

FlowRouter.route('/user-detail/:_id',{
	name:'adminHomePage',
	action(){
		BlazeLayout.render('App_body',{ mani: 'userDetail'})
	}
});

FlowRouter.notFound = {
	action() {
		BlazeLayout.render('App_body', { main: 'App_notFound' });
	},
};

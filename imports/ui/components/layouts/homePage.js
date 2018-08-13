import './homePage.html';
import '../adminpanel/admin-home/adminHomePage.js';
import '../userpanel/user-home/userHome.js';
import '../userpanel/user-detail/userDetail.js';
Template.homePage.helpers({
    userDetail(){
        return(Meteor.user());
    },
    userRole(userRole){
    	
    	if(userRole){
    		return true
    	}
    	return false;
    }
});

import './userHome.html';
import '../../layouts/header.js';

Template.userHome.helpers({
    userDetail(){
       console.log(Meteor.user())
    }
});

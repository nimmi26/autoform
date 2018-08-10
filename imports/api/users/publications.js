
import {Meteor} from "meteor/meteor";

Meteor.publish('userList', function() {
    return (Meteor.users.find({}));
   // return Meteor.users.find({},{fields: {_id: 1, username: 1, emails: 1, profile :1}});

});
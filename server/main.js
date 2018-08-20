// Server entry point, imports all server code

import '/imports/startup/server';
import '/imports/startup/both';
Meteor.startup(function () {
    Accounts.urls.enrollAccount = function (token) {
        return Meteor.absoluteUrl('enroll-account/' + token);
    };
});

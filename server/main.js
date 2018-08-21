// Server entry point, imports all server code

import '/imports/startup/server';
import '/imports/startup/both';
Meteor.startup(function () {

    ///process.env.MAIL_URL="smtps://nimmimzp26%40gmail.com:**********@smtp.gmail.com:465/";
 
    Accounts.urls.enrollAccount = function (token) {
        return Meteor.absoluteUrl('enroll-account/' + token);
    };
});

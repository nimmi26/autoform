// Server entry point, imports all server code

import '/imports/startup/server';
import '/imports/startup/both';
Meteor.startup(function () {


    var smtp = {
        username: Meteor.settings.mailgun_login,
        password: Meteor.settings.mailgun_password,
        server: Meteor.settings.mailgun_hostname,
        port: 465
    };
    
    process.env.MAIL_URL = "smtps://" + encodeURIComponent(smtp.username) + ":" +
        encodeURIComponent(smtp.password) + "@" + encodeURIComponent(smtp.server) +
        ":" + smtp.port;

   // process.env.MAIL_URL= "smtps://nimmi.deligence@gmail.com:nimmiverma@smtp.mailgun.org:587";
    //"smtp://uername%40gmail.com:password@smtp.gmail.com:465/"; 
});



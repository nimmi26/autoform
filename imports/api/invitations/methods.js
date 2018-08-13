import { Meteor } from 'meteor/meteor';
import Invitations from './invitations.js';
Meteor.methods({
    inviteUser(email){
        
       /* Email.send({
            to: "nimmi.deligence@gmail.com",
            from: "nimmi.deligence@gmail.com",
           // from: "fromemailadress@email.com",
            subject: "Invitation to join Leave Management System",
            text: "Dear User,Please join the the internal leave management system to track your leave balance. Please use this same email to register yourself on portal. Link: localhost:3000/singup"
        });*/
        return  Invitations.insert({
            email,
            invitationDate: new Date()
        });
        
    },
    checkUserInInviteCollection(email){
        const inviteeEmail = Invitations.find({email:email,}).count();
        return inviteeEmail;
    },
    updateInvitee(email,userId){
        console.log(userId)
        return Invitations.update({email:email},{$set:{acceptedOrNot:true,userId}})
    }
});


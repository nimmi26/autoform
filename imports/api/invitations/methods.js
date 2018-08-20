import { Meteor } from 'meteor/meteor';
import Invitations from './invitations.js';
Meteor.methods({
    
    checkUserInInviteCollection(email){
        const inviteeEmail = Invitations.find({email:email,}).count();
        return  inviteeEmail;
    },
    updateInvitee(email,userId){
        return Invitations.update({email:email},{$set:{acceptedOrNot:true,userId}})
    }
});

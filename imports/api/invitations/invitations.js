import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

const Invitations = new Mongo.Collection("invitations");
const Schemas = {};

Schemas.Invitations = new SimpleSchema({
    email:{
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },

    acceptedOrNot:{
        type: Boolean,
        defaultValue: false //0 represent User has not created their profile
    },
    invitationDate:{
        type: new Date()
    }
});

Invitations.attachSchema(Schemas.Invitations);
export default Invitations;

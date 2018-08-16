import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

const Schema = {};
Schema.UserProfile = new SimpleSchema({
    name: {
        label: "Name",
        type: String,
        optional: true
    },
    birthday: {
        type: Date,
        optional: true
    },
    gender: {
        type: String,
        allowedValues: ['Male', 'Female'],
        optional: true
    },
    userRole:{
        type: Number,
        defaultValue: 1//role 1 show its employee
    },
    dateOfJoining:{
        type:Date,
        optional:true
    },
    dateOfConfrimation:{
        type:Date,
        optional:true
    },
    confrimOrNot:{
        type:Boolean,
        defaultValue:false
    },
    totalNoOfLeaves:{
        type: Number,
        defaultValue:0
    }
});

Schema.User = new SimpleSchema({
    username: {
        type: String,
        
        optional: true
    },
    emails: {
        type: Array,

        optional: true
    },
    "emails.$": {
        type: Object
    },
    "emails.$.address": {
        label:"e-Mail",
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    
    createdAt: {
        type: Date
    },
    profile: {
        type: Schema.UserProfile,
        optional: true
    },
   
    // Make sure this services field is in your schema if you're using any of the accounts packages
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    'services.$':{
        type: Object
    },
    'services.$.password':{
        type:String,
        autoform:{
            type:"password"
        }
    }

});

const Users = Meteor.users.attachSchema(Schema.User);
export default(Users);

import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

const Leaves = new Mongo.Collection("leaves");
const Schemas = {};

Schemas.Leaves = new SimpleSchema({
    
    userId:{
        type: String,
    },
    
    "appliedLeave": {
        label: "Applied Leaves",
        type: Number,
        optional: true,
        min:-365
    },
    "appliedto": {
        type: Date,
    },
    "appliedFrom": {
        type: Date,
    },
    "approvedDate": {
        type: Date,
        optional: true
    },
    "approvedOrNot": {
        type: Boolean,
        defaultValue: false
    },
    "cancelByUser": {
        type: Boolean,
        defaultValue: false
    },
    "cancelByAdmin":{
        type: Boolean,
        defaultValue:false
    },
    "reason":{
        type: String
    },
    appliedDate:{
        type:Date
    },
    seenByAdmin:{
        type: Boolean,
        defaultValue: false
    }
});

Leaves.attachSchema(Schemas.Leaves);
export default Leaves;

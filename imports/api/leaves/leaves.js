import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

const Leaves = new Mongo.Collection("leaves");
const Schemas = {};

Schemas.Leaves = new SimpleSchema({
    totalNoOfLeaves:{
        type: Number
    },
    userId:{
        type: String,
    },
    leaveHistory:{
        type: Array,
        optional: true
    },
    "leaveHistory.$": {
        type: Object
    },
    "leaveHistory.$.appliedLeave": {
        label: "Applied Leaves",
        type: Number,
        optional: true
    },
    "leaveHistory.$.appliedto": {
        type: Date,
    },
    "leaveHistory.$.appliedFrom": {
        type: Date,
    },
    "leaveHistory.$.approvedDate": {
        type: Date,
        optional: true
    },
    "leaveHistory.$.approvedOrNot": {
        type: Boolean,
        defaultValue: false
    },
    "leaveHistory.$.canceled": {
        type: Boolean,
        defaultValue: false
    },
    "leaveHistory.$.leaveId":{
        type: String
    }
});

Leaves.attachSchema(Schemas.Leaves);
export default Leaves;

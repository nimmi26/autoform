import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

const Leaves = new Mongo.Collection("leaves");
const Schemas = {};

Schemas.UserLeaves = new SimpleSchema({
    appliedLeave: {
        label: "Applied Leaves",
        type: Number,
        optional: true
    },
    appliedDate: {
        type: Date,
        optional: true
    },
    approvedDate: {
        type: Date,
        optional: true
    },
    approvedOrNot:{
        type: Boolean,
        optional: true
    }
});

Schemas.Leaves = new SimpleSchema({
    totalNoOfLeaves:{
        type: Number
    },
    userId:{
        type: String,
    },
    leaveHistory:{
        type: Schemas.UserLeaves,
        optional: true
    }
});

Leaves.attachSchema(Schemas.Leaves);
export default Leaves;

import Leaves from './leaves.js';
import {Meteor} from "meteor/meteor";

Meteor.publish('leavesDetails', function() {
    return (Leaves.find({}));
});

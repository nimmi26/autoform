import Invitations from './invitations.js';
import {Meteor} from "meteor/meteor";

Meteor.publish('invitations', function() {
    return (Invitations.find({}));
});
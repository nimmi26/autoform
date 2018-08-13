import { Meteor } from 'meteor/meteor';
import Leaves from './leaves.js';
Meteor.methods({
    assignLeave(userId,parameter){
        let existingUser = Leaves.find({userId:userId}).count();
        if(existingUser){
            Leaves.update(
                {  userId:userId },
                { $inc: { totalNoOfLeaves: parameter } }
            )
        }else if(parameter){
            Leaves.insert({
                userId,
                totalNoOfLeaves:1
            })
        }
       
    }
});
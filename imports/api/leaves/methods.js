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
    },
    applyLeaves(applyData){
        return Leaves.insert(
            {
                userId:Meteor.userId(),
                leaveId: applyData.leaveId,
                appliedLeave:applyData.days,
                appliedto:applyData.toDate,
                appliedFrom:applyData.fromDate,
                reason:applyData.leaveReason,
                appliedDate:applyData.appiledDate
            }  
        );
    },
    cancelLeave(leaveData){
        let leaveDetail = Leaves.find({_id:leaveData.leaveId}).fetch();
        if(leaveDetail[0].approvedOrNot){
            Meteor.users.update({_id:leaveData.userId},{$inc:{'profile.totalNoOfLeaves':leaveDetail[0].appliedLeave}});
        }
        if(leaveData.admin){
            return Leaves.update({_id:leaveData.leaveId},{$set:{cancelByAdmin:true,approvedOrNot:false}});
        }else{
            return Leaves.update({_id:leaveData.leaveId},{$set:{cancelByUser:true,approvedOrNot:false}});
        } 
    },
    approveLeave(leaveData){
        let leaveDetail = Leaves.find({_id:leaveData.leaveId}).fetch();
        let totalLeave = parseInt(leaveDetail.appliedLeave)-parseInt(leaveData.totalNoOfLeaves);
        Meteor.users.update({_id:leaveData.userId},{$inc:{'profile.totalNoOfLeaves':-(leaveDetail[0].appliedLeave)}});
            
       return Leaves.update({_id:leaveData.leaveId},{$set:{approvedOrNot:true,cancelByAdmin:false,approvedDate:new Date()}});
    },
    seenByAdmin(userId){
        return (Leaves.update({userId:userId},{set:{seenByAdmin:true}}));
    }
});

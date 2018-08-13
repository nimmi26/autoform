import { Meteor } from 'meteor/meteor';
Meteor.methods({
    updateUser(updatedDoc){
        
        //return Meteor.users.update({_id:updatedDoc},updatedDoc);
        if(updatedDoc.role){
            //edited by user
            return Meteor.users.update({_id:updatedDoc._id},
                {$set:
                    {
                        'profile.name':updatedDoc.profile.name,
                        'profile.birthday':updatedDoc.profile.birthday,
                        'profile.gender':updatedDoc.profile.gender,
                    }
                }
            );
        }else{
            //edited by admin
            return Meteor.users.update({_id:updatedDoc._id},
                {$set:
                    {
                        'profile.name':updatedDoc.profile.name,
                        'profile.birthday':updatedDoc.profile.birthday,
                        'profile.gender':updatedDoc.profile.gender,
                        'profile.dateOfJoining':updatedDoc.profile.dateOfJoining,
                        'profile.confrimOrNot':updatedDoc.profile.confrimOrNot,
                        'profile.dateOfConfrimation':updatedDoc.profile.dateOfConfrimation,
                    }
                }
            );
        }  
    }
});

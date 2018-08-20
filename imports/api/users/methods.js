import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
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
    },

    checkForToken(userData){
        let err = {};
        let checkfortoken = Meteor.users.find({'services.password.reset.token':userData.token}).count();
        if(checkfortoken){
            return checkfortoken;   
        }    
    },

    createUserProfile(userData){
        return(
            Meteor.users.update({_id:userData.userId},{$set:{'profile.name':userData.profilename,'profile.birthday':userData.profilebirthady,'profile.gender':userData.profilegender,'profile.userRole':1,'profile.confrimOrNot':false,'profile.totalNoOfLeaves':0,profileCreated:true}})
        );
    },
    inviteUser(email){
        var userId = Accounts.createUser({username: email, email: email, password: 'initialPassword'});
        console.log(Accounts.sendEnrollmentEmail(userId));
    }
   /* loginuser(email,password){
        return (
            Meteor.loginWithPassword(email,password)
        );
    }*/
});

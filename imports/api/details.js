import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

//izveidot db
export const Details = new Mongo.Collection('details'); //vārds, uzvārds

if (Meteor.isServer) {
  // padarīt db publisku
  Meteor.publish('details', function(){
    return Details.find({owner: this.userId}); //parādīt ierakstus, kas pieder konkrētajam lietotājam // owner: this.userId
  });
}

//Meteor metodes
 Meteor.methods({
// pievienot ierakstu db
//     addResolutions: function(title){
//       Details.insert({
//         text: title,
//         createdAt: new Date(),
//         owner: Meteor.userId()
//       });
//     },

// //dzēst ierakstu no db
//     deleteResolutions: function(_id){
//       var tes = Test.findOne(_id); // atrast vienu ierakstu
//       Test.remove(_id); //izdzēst ierakst no db
//     }
    // updateResolutions: function(_id, checked){
    //     Test.update(_id, {$set: {checked: checked}});
    // }
  });

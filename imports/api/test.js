import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

//izveidot db
export const Test = new Mongo.Collection('test');//ieraksti

if (Meteor.isServer) {
  //padarīt db publisku
  Meteor.publish("test", function(){
    return Test.find({owner: this.userId}); //parādīt ierakstus, kas pieder konkrētajam lietotājam //
  });
}


//Meteor metodes
 Meteor.methods({
//pievienot ierakstu db
    addResolutions: function(inputtable1){
      Test.insert({
        text: inputtable1,
        createdAt: new Date(),
        owner: Meteor.userId()
      });
    },
//dzēst ierakstu no db
    deleteResolutions: function(_id){
      var tes = Test.findOne(_id); // atrast vienu ierakstu
      Test.remove(_id); //izdzēst ierakst no db
    }
    // updateResolutions: function(_id, checked){
    //     Test.update(_id, {$set: {checked: checked}});
    // }
  });

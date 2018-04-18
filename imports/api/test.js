import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

//izveidot db
export const Test = new Mongo.Collection('test');

if (Meteor.isServer) {
  Meteor.publish("test", function(){
    return Test.find({owner: this.userId});
  });
}
 Meteor.methods({
    addResolutions: function(data){
      data.form.createdAt = new Date();
      data.form.owner = Meteor.userId();
      Test.insert(data.form);
    },
    //
    updateResolutions: function(_id, data){
        Test.update(_id, {$set: {"data.form.texter" : "data.forma.texter"}});
    }
    //
  });

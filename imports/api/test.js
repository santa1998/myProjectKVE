import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

// Create Database Collection
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
    updateResolutions: function(data){
      data.form.owner = Meteor.userId();
      Test.update(data.form.resolution_id, data.form);
      }
});

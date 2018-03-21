import { Meteor } from 'meteor/meteor';
import { Recipes } from '../Recipes.js';

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('recipes', function(){
    return recipes.find({author: this.userId});
  });


Recipes.allow({
  insert: function(userId, doc){
   return !!userId;
    }
  })

//Meteor metodes
 Meteor.methods({

  });

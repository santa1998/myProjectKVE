import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

export const Recipes = new Meteor.Collection('recipes');


Recipes.allow({
  insert: function(userId, doc){
   return !!userId;
 },
   update: function(userId, doc){
     return !!userId;
   }
  });

Ingredient = new SimpleSchema({
  name: {
    type: String,
    label: false
  }
});

RecipeSchema = new SimpleSchema({
name: {
  type: String,
  label: "Vārds(obligāts)"
},
surname: {
  type: String,
  label: "Uzvārds(obligāts)"
},
school:{
  type: String,
  label: "Skola(obligāts)"
},
subjects:{
  type: Array,
  label: "Mācāmie priekšmeti",
  optional: true
},
'subjects.$': {
  type: Ingredient,
   label: false,
   optional: true
},
email:{
  type: String,
  label: "E-pasts(obligāts)"
},
number: {
  type: Number,
  label: "Tālrunis",
  optional: true
},
author: {
  type: String,
  label: "Author",
  autoValue: function(){
    return this.userId
  },
  autoform: {
        type: "hidden"
  }
}
});

Recipes.attachSchema( RecipeSchema );

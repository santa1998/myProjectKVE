import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

export const Recipes = new Meteor.Collection('recipes'); 

Ingredient = new SimpleSchema({
  name: {
    type: String,
    label: false
  }
});

RecipeSchema = new SimpleSchema({
name: {
  type: String,
  label: "Vārds"
},
surame: {
  type: String,
  label: "Uzvārds"
},
school:{
  type: String,
  label: "Skola"
},
subjects:{
  type: Array,
  label: "Mācāmie priekšmeti"
},
'subjects.$': {
  type: Ingredient,
   label: false
},
email:{
  type: String,
  label: "E-pasts"
},
number: {
  type: Number,
  label: "Tālrunis"
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

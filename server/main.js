import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Recipes } from '../imports/api/Recipes.js';

import '../imports/api/test.js';
import '../imports/api/Recipes.js';

Meteor.publish('recipes', function(){
  return Recipes.find({author: this.userId});
});

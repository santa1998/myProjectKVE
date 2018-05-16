import { Test } from '../../imports/api/test.js';
import { Recipes } from '../../imports/api/Recipes.js';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../../imports/api/test.js';
import '../../imports/api/Recipes.js';

if (Meteor.isClient) {
  // Show Documents
Meteor.subscribe("test");
Meteor.subscribe("recipes");

// Overview Events
    Template.Overview.events({
      'submit .new-resolution': function(event){
        var form = {};
        $.each($('#test-form').serializeArray(), function() {
          form[this.name] = this.value;
        });
    console.log(form);
        event.preventDefault();
        Meteor.call("addResolutions", {form: form}, function(err, res){
          if (!err) {
          FlowRouter.go('/dblist');
            }
        });
        console.log("Form submitted");
        return false;
      }
    });

    Template.Editdb.events({
      'submit .old-resolution': function(event){
        var forma = {};
        $.each($('#test2-form').serializeArray(), function() {
          forma[this.name] = this.value;
        });
    console.log(forma);
        event.preventDefault();
        Meteor.call("updateResolutions", {form: forma}, function(err, res){
          if (!err) {
          FlowRouter.go('/dblist');
            }
        });
        console.log("form submitted");
        return false;
      }
    });

    Template.Editdb.helpers({
      test: () => {
       const test = Test.findOne(FlowRouter.current().params.id);
       return test;
     },
     'equals':  function(a, b) {
        return a === b;
      }
    });

        Template.db.helpers({
          test: () => {
           const test = Test.findOne(FlowRouter.current().params.id);
           return test;
         },
         'equals':  function(a, b) {
            return a === b;
          }
        });

        Template.DBList.helpers({
          test: function(){
            return Test.find({});
          }
        });

        Template.DBList.events({
          'click .select': function(){
            FlowRouter.go('/db');
          },
          'click .increment': function(){
            Test.remove(this._id);
          }
      });

        Template.Header.helpers({
          Recipes(){
            return Recipes;
          },
           recipes: ()=> {
             return Recipes.find({});
           }
        });

        Template.Profile.helpers({
          Recipes(){
            return Recipes;
          },
           recipes: ()=> {
             return Recipes.find({});
           }
        });

        Template.Edit.helpers({
          Recipes(){
            return Recipes;
          },
           recipes: ()=> {
             return Recipes.find({});
           }
        });

        Template.Edit.events({
            'submit .new-recipe-form': function(){
              FlowRouter.go('/profile');
            }
        });

        // Register Events
        Template.Register.events({
           'submit form': function (event, template){
            event.preventDefault();
            var emailVar = template.find('#email2').value;
            var passwordVar = template.find('#password2').value;
            console.log('Form submitted.');

            // Create User
            Accounts.createUser({
              email: emailVar,
              password: passwordVar
            });
          }
  });

  // Login
  Template.Login.events({
     'submit form': function (event, template){
      event.preventDefault();
      var emailVar = template.find('#email').value;
      var passwordVar = template.find('#password').value;
      console.log('Login successful!');
      Meteor.loginWithPassword(emailVar, passwordVar, function(error){
        if (error) {
          console.log(error.reason);
        }else {
          FlowRouter.go('/');
        }
      });
    }
  });

  // Logout
  Template.Header.events({
    'click .logout': function(event){
      event.preventDefault();
      Meteor.logout(function() {
        FlowRouter.go('/register');
      }),
      console.log('Logging out successful!');
    }
  });

Template.body.helpers({
    activeMenuClass(name) {
        const active = ActiveRoute.name(name);
        return active && 'active';
    }
});
}

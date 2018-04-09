import { Test } from '../../imports/api/test.js';
import { Recipes } from '../../imports/api/Recipes.js';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../../imports/api/test.js';
import '../../imports/api/Recipes.js';

if (Meteor.isClient) {
  //parādīt dokumentus
Meteor.subscribe("test");
Meteor.subscribe("recipes");

//main template EVENTS
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
      },
      'change input': function(){
        Session.set('showIcon', true);
      }
    });

        Template.db.events({
        'click .increment': function(){
          FlowRouter.go('/editdb');
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
        
//izveidot account
  // Template.Register.events({  //register template events
  //    'submit form': function (event, template){ //apstiprināta forma
  //     event.preventDefault();
  //     var emailVar = template.find('#email2').value; //saglabā mainīgajā vērtību no input lauka ar atbilsotšo id
  //     var passwordVar = template.find('#password2').value; //saglabā mainīgajā vērtību no input lauka ar atbilsotšo id
  //     console.log('Form submitted.');
  //
  //     Accounts.createUser({ //izveido lietotāju ar norādītajiem parametriem
  //       email: emailVar,
  //       password: passwordVar
  //     });
  //   }
  // });
//ielogoties ar account
  Template.Login.events({  //login template events
     'submit form': function (event, template){
      event.preventDefault();
      var emailVar = template.find('#email').value; //saglabā mainīgajā vērtību no input lauka ar atbilsotšo id
      var passwordVar = template.find('#password').value;
      console.log('Login succesfull!');
      Meteor.loginWithPassword(emailVar, passwordVar, function(error){ //ielogoties ar mainīgajiem
        if (error) {
          console.log(error.reason);
        }else {
          FlowRouter.go('/');
        }
      });
    }
  });

//izlogoties no account
  Template.Header.events({
    'click .logout': function(event){ //nospiest pogu ar klasi "logout"
      event.preventDefault();
      Meteor.logout(function() {
        FlowRouter.go('/login');
      }),
      console.log('Logging out succesfull!');
    }
  });

Template.body.helpers({
    activeMenuClass(name) {
        const active = ActiveRoute.name(name);
        return active && 'active';
    }
});
}

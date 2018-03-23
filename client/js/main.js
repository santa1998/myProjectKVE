import { Test } from '../../imports/api/test.js';
import { Details } from '../../imports/api/details.js';
import { Recipes } from '../../imports/api/Recipes.js';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../../imports/api/test.js';
import '../../imports/api/details.js';
import '../../imports/api/Recipes.js';

if (Meteor.isClient) {
  //parādīt dokumentus
Meteor.subscribe("test");
Meteor.subscribe("details");
Meteor.subscribe("recipes");

//main template EVENTS
    Template.Overview.events({
      'submit .new-resolution': function(event){  //izpildīt funkciju apstiprinot formu
        //saglabā mainīgajā ievadīto vērtību
         event.preventDefault();
        var title = event.target.texter.value;
        var title2 = event.target.text2.value;
        var title23 = event.target.text23.value;
        var title3 = event.target.text3.value;
        var title4 = event.target.text4.value;
        var title5 = event.target.text5.value;
        var title6 = event.target.text6.value;
        var title7 = event.target.text7.value;
        var title8 = event.target.text8.value;
        var title9 = event.target.text9.value;
        var title10 = event.target.text10.value;
        var title11 = event.target.text11.value;
        var title12 = event.target.text12.value;
        var title13 = event.target.text13.value;
        var title14 = event.target.text14.value;
        var title15 = event.target.text15.value;
        var title16 = event.target.text16.value;
        var title17 = event.target.text17.value;
        var checkbox1 = event.target.checkbox1text.value;
        var checkbox2 = event.target.checkbox2text.value;
        var checkbox3 = event.target.checkbox3text.value;
        var checkbox4 = event.target.checkbox4text.value;
        var table1 = event.target.inputtable1.value;
        var table2 = event.target.inputtable2.value;
        var table3 = event.target.inputtable3.value;
        var table4 = event.target.inputtable4.value;
        var table5 = event.target.inputtable5.value;
        var table6 = event.target.inputtable6.value;
        var input6 = event.target.input6.value;
        var input61 = event.target.input61.value;
        var radio = event.target.radio7.value;
        var textarea8 = event.target.textarea8.value;
        var textarea81 = event.target.textarea81.value;
        var textarea9 = event.target.textarea9.value;
        //izsauc metodi no server
        Meteor.call("addResolutions", title, title2, title23, title3, title4, title5, title6, title7, title8, title9, title10, title11, title12, title13, title14, title15, title16, title17, checkbox1, checkbox2, checkbox3, checkbox4, table1, table2, table3, table4, table5, table6, input6, input61, radio, textarea8, textarea81, textarea9, function(err, res){
          if (!err) {
          FlowRouter.go('/db');
            }
        });
        //izdzēst vērtību no input field
        event.target.texter.value="";
        event.target.text2.value="";
        event.target.text23.value="";
        event.target.text3.value="";
        event.target.text4.value="";
        event.target.text5.value="";
        event.target.text6.value="";
        event.target.text7.value="";
        event.target.text8.value="";
        event.target.text9.value="";
        event.target.text10.value="";
        event.target.text11.value="";
        event.target.text12.value="";
        event.target.text13.value="";
        event.target.text14.value="";
        event.target.text15.value="";
        event.target.text16.value="";
        event.target.text17.value="";
        event.target.checkbox1text.value="";
        event.target.checkbox2text.value="";
        event.target.checkbox3text.value="";
        event.target.checkbox4text.value="";
        event.target.inputtable1.value="";
        event.target.inputtable2.value="";
        event.target.inputtable3.value="";
        event.target.inputtable4.value="";
        event.target.inputtable5.value="";
        event.target.inputtable6.value="";
        event.target.input6.value="";
        event.target.input61.value="";
        event.target.radio7.value="";
        event.target.textarea8.value="";
        event.target.textarea81.value="";
        event.target.textarea9.value="";
        console.log("Form submitted");
        return false;

        }
    });

    //main template HELPERS
        Template.db.helpers({
          test: function(){
              return Test.find({});
          },
          // isOwner: function(){
          //   return this.owner === Meteor.userId();
          // },
          'selectedClass': function(){
            var playerId = this._id;
            var selectedPlayer = Session.get('selectedPlayer');
            if (playerId === selectedPlayer) {
              return "selected"; //piešķir klasi ar kuru iekrāso izvēlēto
            }
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
           // updateRecipeId: funtion() {
           //   return this._id;
           // }
        });

        Template.Edit.helpers({
          Recipes(){
            return Recipes;
          },
           recipes: ()=> {
             return Recipes.find({});
           }
           // recipes: function(){
           //     return Recipes.find({});
           // }
           // isOwner: function(){
           //   return this.owner === Meteor.userId();
           // }
        });

        Template.db.events({
          // izdzēst ierakstu
        'click .increment': function(){
            var selectedPlayer = Session.get('selectedPlayer');
            Meteor.call("deleteResolutions", selectedPlayer);
          },
            'click .player': function(){ ///izdzēst dokumentu no db
                var playerId = this._id;
                Session.set('selectedPlayer', playerId);
              }
      //         'click .toggle-checked': function(){
      //           Meteor.call("updateResolutions", this._id, !this.checked);
      //         }

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

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
    updateResolutions: function(form){
      Test.update(form._id, {
    $set: {
      "form.$.texter": 42,
        // texter: data.forma.texter,
        // text2: data.forma.text2,
        // text23: data.forma.text23,
        // text3: data.forma.text3,
        // text4: data.forma.text4,
        // text5: data.forma.text5,
        // text6: data.forma.text6,
        // text7: data.forma.text7,
        // text8: data.forma.text8,
        // text9: data.forma.text9,
        // text10: data.forma.text10,
        // text11: data.forma.text11,
        // text12: data.forma.text12,
        // text13: data.forma.text13,
        // checkbox1text: data.forma.checkbox1text,
        // checkbox2text: data.forma.checkbox2text,
        // checkbox3text: data.forma.checkbox3text,
        // checkbox4text: data.forma.checkbox4text,
        // text14: data.forma.text14,
        // text15: data.forma.text15,
        // text16: data.forma.text16,
        // text17: data.forma.text17,
        // inputtable1: data.forma.inputtable1,
        // inputtable2: data.forma.inputtable2,
        // inputtable3: data.forma.inputtable3,
        // inputtable4: data.forma.inputtable4,
        // inputtable5: data.forma.inputtable5,
        // inputtable6: data.forma.inputtable6,
        // input6: data.forma.input6,
        // input61: data.forma.input61,
        // textarea8: data.forma.textarea8,
        // textarea81: data.forma.textarea81,
        // textarea9: data.forma.textarea9,
        createdAt: new Date(),
        owner: Meteor.userId(),
      },
    });
  }
});

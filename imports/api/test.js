import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

//izveidot db
export const Test = new Mongo.Collection('test');//ieraksti

if (Meteor.isServer) {
  //padarīt db publisku
  Meteor.publish("test", function(){
    return Test.find({owner: this.userId}); //parādīt ierakstus, kas pieder konkrētajam lietotājam //
  });
}


//Meteor metodes
 Meteor.methods({
//pievienot ierakstu db
    addResolutions: function(title, title2, title23, title3, title4, title5, title6, title7, title8, title9, title10, title11, title12, title13, title14, title15, title16, title17, checkbox1, checkbox2, checkbox3, checkbox4, table1, table2, table3, table4, table5, table6, input6, input61, radio, textarea8, textarea81, textarea9){
      Test.insert({
        text: title,
        text2: title2,
        text23: title23,
        text3: title3,
        text4: title4,
        text5: title5,
        text6: title6,
        text7: title7,
        text8: title8,
        text9: title9,
        text10: title10,
        text11: title11,
        text12: title12,
        text13: title13,
        text14: title14,
        text15: title15,
        text16: title16,
        text117: title17,
        checkboxx: checkbox1,
        checkboxx2: checkbox2,
        checkboxx3: checkbox3,
        checkboxx4: checkbox4,
        tablee: table1,
        tablee2: table2,
        tablee3: table3,
        tablee4: table4,
        tablee5: table5,
        tablee6: table6,
        inputt6: input6,
        inputt61: input61,
        radioo: radio,
        textareaa8: textarea8,
        textareaa81: textarea81,
        textareaa9: textarea9,
        createdAt: new Date(),
        owner: Meteor.userId()
      });
    },
//dzēst ierakstu no db
    deleteResolutions: function(_id){
      var tes = Test.findOne(_id); // atrast vienu ierakstu
      Test.remove(_id); //izdzēst ierakst no db
    }
    // updateResolutions: function(_id, checked){
    //     Test.update(_id, {$set: {checked: checked}});
    // }
  });

Session.setDefault('sList');
$(document).ready(function(){
  pice = 0;
});
var price = 0;
Template.body.events({
  'click #search':function (event) {
    var topic =$('#topic').val();
    Meteor.call('getshoppingList', topic, function (err, result) {
      var list=result.channel.item;
      Session.set('sList',list);
      console.log(list);
    })
  },
  'click input' : function(event){
    if(event.target.checked == true){
      price += Number(event.target.value.split(':')[1]);
      console.log(price);
      //check.push(event.target);
    }
    else if(!event.target.check){
      price -= Number(event.target.value.split(':')[1]);
      console.log(price);
    }
  },
  'click #checkNext' : function(){
      Session.set("price",price);
      console.log(Session.get("price"));
  }
});
Template.body.helpers({

  sList:function () {
    var list = Session.get('sList');
    for(var a in list){
      list[a].price_max *= 100;
    }
    console.log(list);
    return list;
  }
})
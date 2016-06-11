Session.setDefault('sList');
var price = 0;

Template.AMarket.events({
  'keyup #topic':function (event) {
    if(event.which == 13){
      var topic =$('#topic').val();
      console.log(topic);
      Meteor.call('getshoppingList', topic, function (err, result) {
        var list = [];
        for(var a in result){
          list.push({
            brand : result[a].channel.item[0].brand,
            image_url : result[a].channel.item[0].image_url,
            title : result[a].channel.item[0].title,
            price : result[a].channel.item[0].price_max,
            link : result[a].channel.item[0].link
          });
        }
        console.log(list);
        Session.set('sList',list);
      })
    }
  },
  'click input' : function(event){
    if(event.target.checked == true){
      price += Number(event.target.value.split('$')[1]);
      console.log(price);
      //check.push(event.target);
    }
    else if(!event.target.check){
      price -= Number(event.target.value.split('$')[1]);
      console.log(price);
    }
  },
  'click #checkNext' : function(){
      Session.set("price",price);
      console.log(Session.get("price"));
  }
});
Template.AMarket.helpers({

  sList:function () {
    var list = Session.get('sList');
    for(var a in list){
      list[a].price_max *= 100;
    }
    console.log(list);
    return list;
  }
})
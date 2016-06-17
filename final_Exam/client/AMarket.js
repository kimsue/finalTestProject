Session.setDefault('sList');
var price = 0;
var productList = [];

Template.AMarket.events({
  'keyup #topic':function (event) {
    if(event.which == 13){
      var topic =$('#topic').val();
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
      });
    }
  },
  'click input' : function(event){
    if(event.target.checked == true){
      console.log(event.target.value.split('_')[0]);
      console.log(event.target.value.split('_')[1]);
      price += Number(event.target.value.split('_')[1]);
      console.log(price);
    }
    else if(!event.target.check){
      price -= Number(event.target.value.split('_')[1]);
      console.log(price);
    }
  },
  'click #checkNext' : function(event){
    productList = [];
    var allPrice = 0;
    $('input:checkbox[id="del_id"]').each(function() {
      if(this.checked == true){ //값 비교
        allPrice += Number(this.defaultValue.split('_')[1]);
        productList.push({
          item :this.defaultValue.split('_')[0],
          price : this.defaultValue.split('_')[1]
        });
      }
    });
    console.log(productList);
    Session.set("allPrice",allPrice);
    Session.set('productList',productList);
    Router.go('/productlist');
  }
});
Template.AMarket.helpers({

  sList:function () {
    var list = Session.get('sList');
    for(var a in list){
      list[a].price = Number(list[a].price *= 100);
    }
    console.log(list);
    return list;
  }
})
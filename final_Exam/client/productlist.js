/**
 * Created by hs on 2016-06-17.
 */
Template.productlist.helpers({
    count : function(){
        var count = Session.get('productList');
        return count.length;
    },
    productList : function(){
        return Session.get('productList');
    },
    allPrice : function(){
        return Session.get('allPrice');
    }
});












/**
 * Created by sueyeon on 2016-06-11.
 */
Session.setDefault('cList')
Template.body.events({
    'click #search':function (event) {
        var topic =$('#topic').val();
        Meteor.call('getcheckList', topic, function (err, result) {
            var list=result.channel.item;
            Session.set('sList',list);
            console.log(list);
        })
    }
});
Template.body.helpers({

    cList:function () {
        var list = Session.get('cList');
        console.log(list);
        return list;
    }
})
Meteor.methods({
    getshoppingList: function (topic) {
        console.log('Topic:'+topic);
        var url="https://apis.daum.net/shopping/search?apikey=ca1f8881026d7bdc1fbe206dbe26b4f3&result=20&pageno=3&sort=min_price&output=json&q="+topic;
        var result =HTTP.get(url).data;
        return result;
    }
})
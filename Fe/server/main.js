shop = new Mongo.Collection("shop");

Meteor.methods({
    getshoppingList: function (topic) {
        var url="https://apis.daum.net/shopping/search?apikey=ca1f8881026d7bdc1fbe206dbe26b4f3&result=20&pageno=3&sort=min_price&output=json&q="+topic;
        var result =HTTP.get(url).data;
        var finalObj = [];
        var data = result.channel.item;
        for(var a in data){
            var url = "https://apis.daum.net/shopping/detail?apikey=ca1f8881026d7bdc1fbe206dbe26b4f3&docid="+ data[a].docid +"&output=json";
            console.log(url);
            //finalObj.push(HTTP.get(url).data);
        };
        return finalObj;
    }
});

var data = [
    {
        category :[
            {
                name:"주방용품",
                items:[
                    {
                        productName : "냄비",
                        price : "5500",
                        location : "5F",
                        brand : "양은사",

                    },
                    {
                        productName : "국자",
                        price : "3000",
                        location : "5F",
                        brand : "국자사",
                    },
                    {
                        productName : "칼",
                        price : "2500",
                        location : "5F",
                        brand : "칼사",
                    },
                    {
                        productName : "숟가락",
                        price : "3300",
                        location : "5F",
                        brand : "숟가락사",
                    },
                    {
                        productName : "젓가락",
                        price : "2000",
                        location : "5F",
                        brand : "젓가락사",
                    }
                ]
            },
            {
                name:"음식",
                items:[
                    {
                        productName : "두부",
                        price : "1500",
                        location : "2F",
                        brand : "풀무원",
                    },
                    {
                        productName : "자두",
                        price : "6000",
                        location : "2F",
                        brand : "과일특공대",
                    },
                    {
                        productName : "체리",
                        price : "6500",
                        location : "2F",
                        brand : "과일특공대",

                    },
                    {
                        productName : "계란",
                        price : "4000",
                        location : "2F",
                        brand : "신선란",

                    }
                ]
            },
            {
                name:"헤어/바디",
                items:[
                    {
                        productName : "엘라스틴",
                        price : "5500",
                        location : "4F",
                        brand : "애경",

                    },
                    {
                        productName : "오이비누",
                        price : "1500",
                        location : "4F",
                        brand : "LG생활건강",
                    },
                    {
                        productName : "린스",
                        price : "3000",
                        location : "4F",
                        brand : "LG생활건강",
                    },
                    {
                        productName : "바디워시",
                        price : "6000",
                        location : "4F",
                        brand : "퐁퐁",
                    },
                    {
                        productName : "트린트먼트",
                        price : "2500",
                        location : "4F",
                        brand : "퐁퐁",
                    }

                ]
            }
        ]
    },
];

if(shop.find().count() == 0){
    shop.insert(data);
}
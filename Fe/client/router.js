/**
 * Created by sueyeon on 2016-06-09.
 */
Router.configure({
    layoutTemplate: 'layout',
   // loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.route('/', {name: 'home'});
// 첫 번째는 어떤 url로 할 것인가, 두 번째는 url로 사용할 템플릿 명을 선언!
Router.route('/productlist', {name: 'productlist'});
Router.route('/AMarket', {name: 'AMarket'});



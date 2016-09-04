function config ($stateProvider, $urlRouterProvider) {

  $stateProvider
    //Core
    .state('root', {
      abstract: true,
      templateUrl: 'templates/core/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/core/home.tpl.html'
    })
    //About
      .state('root.about', {
      url: '/about',
      templateUrl: 'templates/twin-bridges/about.tpl.html'
    })
    //Location
      .state('root.location', {
      url: '/location',
      templateUrl: 'templates/twin-bridges/location.tpl.html'
    })
    //Activities
      .state('root.activities', {
      url: '/activities',
      templateUrl: 'templates/twin-bridges/activities.tpl.html'
    })
    //Rates
      .state('root.rates', {
      url: '/rates',
      templateUrl: 'templates/twin-bridges/rates.tpl.html'
    })
    $urlRouterProvider.otherwise('/');

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };
app.config(function($stateProvider, $urlRouterProvider,$httpProvider) {
	
	 $httpProvider.defaults.useXDomain = true;
	
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");

  $stateProvider
  .state('/', {
      url: "/",
      templateUrl: "partials/home.html",
	  	title: 'Home'
    })
    .state('login', {
      url: "/login",
      templateUrl: "partials/login.html",
	  title: 'Login'
    })
	.state('page404', {
      url: "/404",
      templateUrl: "partials/404.html",
	  	title: 'Page not found'
    })
	
});
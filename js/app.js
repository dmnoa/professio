var app=angular.module("professio",['ui.bootstrap','ui.router','RESTService','ngCookies']);

	
	app.run(function($rootScope,$http,RESTService,$cookieStore,$modal,'$state') {
		
		$rootScope.sessionKey=$cookieStore.get("userId");
		
	
		
	
		
	$rootScope.$on('$stateChangeSuccess', 
function(event, toState, toParams, fromState, fromParams){ 
    event.preventDefault(); 
	
	$rootScope.title=toState.title; 
	   // transitionTo() promise will be rejected with 
    // a 'transition prevented' error
});


	if(!$rootScope.sessionKey) {
			$state.go('login');
		}	

  });
  
  app.directive("modal",function() {
return {
restrict:"E",
templateUrl:"partials/modal.html",
controller:ModalDemoCtrl
}
});





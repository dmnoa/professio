var RESTService=angular.module("RESTService",['ui.bootstrap','ngCookies']);

RESTService.factory('RESTService',
    function ($http,$modal) {
        return {
            get:function (url, callback,auth) {
                return $http({method:'GET', url:url,data:auth}).
                    success(function (data, status, headers, config) {
                        callback(data);
                    }).
                    error(function (data, status, headers, config) {
                        $modal.open({
      templateUrl: 'partials/errorModal.html',
      controller: ErrorModalInstanceCtrl,
      size: 400,
      resolve: {
    
		errorText: function () {
          return "failed to retrieve data " + status;
        }
      }
    });
				
                    });
            },
			post:function (url, callback,data) {
                return $http({method:'POST', url:url,data:data}).
                    success(function (data, status, headers, config) {
						
                        callback(data);
                        //console.log(data.json);
                    }).
                    error(function (data, status, headers, config) {
                        console.log("failed to retrieve data");
                    });
            }
        };
    }
);
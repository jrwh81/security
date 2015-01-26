var showApp = angular.module('securityApp', ['ngAnimate'])
	.controller('mainController', function($scope) {
		$scope.info = "hide";
		$scope.showMoreInfo = function(){
			$scope.info = "show";
		}
		$scope.showLessInfo = function(){
			$scope.info = "hide";
		}

		$scope.currentIP = "192.168.0.1";

		$.get("http://jsonip.com", function(r){
			$scope.currentIP = r.ip;
		});		
});

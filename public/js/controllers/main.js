angular.module('summonerController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Summoners', function($scope, $http, Summoners) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all Summoners and show them
		// use the service to get all the Summoners

		$scope.showSummoner = function() {
			Summoners.show($scope.formData.text)
				.success(function(data) {
					console.log(data)
					$scope.load = true;
					$scope.formData = {};
					$scope.summoner = data
					Summoners.matches(data.id)
						.success(function(matches){
							$scope.gamesPlayed = matches.totalGames
							$scope.matches = matches.matches

						})
					console.log($scope.gamesPlayed)
				})
		}


	}]);
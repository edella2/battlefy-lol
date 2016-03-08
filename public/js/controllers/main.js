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
					$scope.load = true;
					$scope.formData = {};
					$scope.summoner = data
					Summoners.matches(data.id)
						.success(function(matches){
							$scope.gamesPlayed = matches.totalGames
							$scope.matches = matches.matches
						})
					Summoners.rankedStats(data.id)
						.success(function(stats){

							var championsStats = stats["champions"]
							var totalRankedStats = championsStats[championsStats.length - 1]["stats"]

							// get total games ranked games played to do averages
							var totalRankedPlayed = totalRankedStats["totalSessionsPlayed"]
							$scope.totalRankedPlayed = totalRankedPlayed

							$scope.rankedStats = totalRankedStats
							console.log($scope)
							console.log($scope.rankedStats)
						})
				})
		}


	}]);
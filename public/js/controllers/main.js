angular.module('summonerController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Summoners', function($scope, $http, Summoners) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all Summoners and show them
		// use the service to get all the Summoners
		console.log($scope.loading)

		$scope.showSummoner = function() {
			Summoners.show($scope.formData.text)
				.success(function(data) {
					$scope.loading = false;
					$scope.formData = {};
					$scope.summoner = data
					console.log($scope.summoner)
				})
		}


		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createSummoner = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Summoners.create($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.todos = data; // assign our new list of todos
					});
			}
		};

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteSummoner = function(id) {
			$scope.loading = true;

			Summoners.delete(id)
				// if successful creation, call our get function to get all the new Summoners
				.success(function(data) {
					$scope.loading = false;
					$scope.todos = data; // assign our new list of todos
				});
		};
	}]);
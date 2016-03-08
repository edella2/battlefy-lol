angular.module('summonerService', [])

	// super simple service
	// each function returns a promise object
	.factory('Summoners', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/summoners/');
			},
			show : function(id) {
				return $http.get('/api/summoners/' + id);
			},
			matches : function(id) {
				return $http.get('/api/matches/' + id);
			},
			stats: function(id) {
				return $http.get('/api/stats/' + id);
			},
			create : function(summonerData) {
				return $http.post('/api/summoners', summonerData);
			},
			delete : function(id) {
				return $http.delete('/api/summoners/' + id);
			}
		}
	}]);
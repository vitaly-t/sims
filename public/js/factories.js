app.factory('UnitFactory', function UnitFactory($rootScope, $http, $location, $q) {

	var exports = {};

	exports.getUnits = function () {
		return $http.get('/api/v1/units')
	        .success(function(data) {
	            return data;
	        })
	        .error(function(error) {
	            console.log('Error: ' + error);
	        });
	};

	exports.getUnitIndicatorsNumber = function (id) {
		$http.get('/api/v1/units/' + id + '/indicators')
			.success(function(data) {
				return 5;
			})
			.error(function(error) {
				console.log('Error: ' + error);
			});
	};

	return exports;

});
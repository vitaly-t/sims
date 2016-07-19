angular.module('indicator.index', ['ngRoute', 'security.authorization']);
angular.module('indicator.index').factory('IndicatorFactory', function IndicatorFactory($rootScope, $http, $location, $q) {

	var exports = {};

	exports.pullIndicatorDataForUnits = function(unitData) {
		var deferred = $q.defer();
	    var urlCalls = [];
	    for (i = 0; i < unitData.length; i++) { 
	        urlCalls.push($http.get('/api/v0.1/units/' + unitData[i].id + '/indicators'))
	    }
	    $q.all(urlCalls)
	        .then(
	            function(results) {
	                var indicators = [];
	                deferred.resolve(JSON.stringify(results));
	                for(i = 0; i < unitData.length; i++) {
	                    unitData[i].indicatorsNumber = results[i].data.length
	                    unitData[i].indicators = results[i].data
	                    for(j = 0; j < results[i].data.length; j++) {
	                        indicators.push($http.get('/api/v0.1/indicators/' + results[i].data[j].indicator_id + '/values/last'))
	                    }
	                }

	                var deferredAgain = $q.defer();
	                $q.all(indicators)
	                    .then(
	                        function(results) {
	                            deferredAgain.resolve(JSON.stringify(results));
	                            k = 0;
	                            for(i = 0; i < unitData.length; i++) {
	                                ind = $scope.unitData[i].indicators;
	                                var val = 0;
	                                for(j = 0; j < ind.length; j++) {
	                                    if(results[k].data["0"] != undefined) {
	                                        unitData[i].indicators[j].value = $sce.trustAsHtml(toIndicator(results[k].data["0"]["value"]));
	                                        unitData[i].indicators[j].date = $filter('date')(results[k].data["0"]["period"], "MMMM dd");
	                                        val = val + results[k].data["0"]["value"];
	                                    }
	                                    k = k + 1;
	                                }
	                                unitData[i].indicatorsMet = val;
	                                if(unitData[i].indicatorsNumber == val) {
	                                    unitData[i].statusPanel = $sce.trustAsHtml("panel-green");
	                                    unitData[i].statusSymbol = $sce.trustAsHtml("fa-check");
	                                } else {
	                                    unitData[i].statusPanel = $sce.trustAsHtml("panel-red");
	                                    unitData[i].statusSymbol = $sce.trustAsHtml("fa-exclamation-triangle");
	                                }
	                            }
	                            return unitData;
	                        })
	            },
	            function(errors) {
	                deferred.reject(errors);
	            },
	            function(updates) {
	                deferred.update(updates);

	        });
	}

	exports.pullCommcareData = function () {
		return $http.get('/api/v0.1/indicators/pull')
            .success(function(data) {
            })
            .error(function(error) {
                console.log('Error: ' + error);
            })
            return $scope.unitData;
	}

	return exports;

});
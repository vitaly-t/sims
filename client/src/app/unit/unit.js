angular.module('unit.index', ['ngRoute', 'security.authorization']);
angular.module('unit.index').config(['$routeProvider', 'securityAuthorizationProvider', function($routeProvider, securityAuthorizationProvider){
  $routeProvider
    .when('/units', {
      templateUrl: 'unit/unit.tpl.html',
      controller: 'UnitCtrl',
      title: 'Units',
      resolve: {
        authenticatedUser: securityAuthorizationProvider.requireAuthenticatedUser
      }
    });
}]);
angular.module('unit.index').factory('UnitFactory', function UnitFactory($rootScope, $http, $location, $q) {

  var exports = {};

  exports.getUnits = function () {
    return $http.get('/api/v0.1/units')
          .success(function(data) {
              return data;
          })
          .error(function(error) {
              console.log('Error: ' + error);
          });
  };

  exports.getUnitIndicatorsNumber = function (id) {
    $http.get('/api/v0.1/units/' + id + '/indicators')
      .success(function(data) {
        return 5;
      })
      .error(function(error) {
        console.log('Error: ' + error);
      });
  };

  return exports;

});
angular.module('unit.index').controller('UnitCtrl', [ '$scope', '$http', '$sce', '$q', '$filter', 'UnitFactory', 'IndicatorFactory',
  function($scope, $http, $sce, $q, $filter, UnitFactory, IndicatorFactory){
    
    $scope.unitData = {};

    var toIndicator = function(value) {
        if(value == 1) return('<span class="text-success"><i class="fa fa-check fa"></i>&nbsp;Met</span>');
        if(value == 0) return('<span class="text-danger"><i class="fa fa-exclamation-triangle fa"></i>&nbsp;Not met&nbsp;&nbsp;</span>')
    }

    IndicatorFactory.pullCommcareData()

    UnitFactory.getUnits()
        .success(function(data) {
            $scope.unitData = data;
        })
        .error(function(error) {
            console.log('Error: ' + error);
        })
        .then(function(data) {
            var deferred = $q.defer();
            var urlCalls = [];
            for (i = 0; i < $scope.unitData.length; i++) { 
                urlCalls.push($http.get('/api/v0.1/units/' + $scope.unitData[i].id + '/indicators'))
            }
            $q.all(urlCalls)
                .then(
                    function(results) {
                        var indicators = [];
                        deferred.resolve(JSON.stringify(results));
                        for(i = 0; i < $scope.unitData.length; i++) {
                            $scope.unitData[i].indicatorsNumber = results[i].data.length
                            $scope.unitData[i].indicators = results[i].data
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
                                    for(i = 0; i < $scope.unitData.length; i++) {
                                        ind = $scope.unitData[i].indicators;
                                        var val = 0;
                                        for(j = 0; j < ind.length; j++) {
                                            if(results[k].data["0"] != undefined) {
                                                $scope.unitData[i].indicators[j].value = $sce.trustAsHtml(toIndicator(results[k].data["0"]["value"]));
                                                $scope.unitData[i].indicators[j].date = $filter('date')(results[k].data["0"]["period"], "MMMM dd");
                                                val = val + results[k].data["0"]["value"];
                                            }
                                            k = k + 1;
                                        }
                                        $scope.unitData[i].indicatorsMet = val;
                                        if($scope.unitData[i].indicatorsNumber == val) {
                                            $scope.unitData[i].statusPanel = $sce.trustAsHtml("panel-green");
                                            $scope.unitData[i].statusSymbol = $sce.trustAsHtml("fa-check");
                                        } else {
                                            $scope.unitData[i].statusPanel = $sce.trustAsHtml("panel-red");
                                            $scope.unitData[i].statusSymbol = $sce.trustAsHtml("fa-exclamation-triangle");
                                        }
                                    }
                                })
                    },
                    function(errors) {
                        deferred.reject(errors);
                    },
                    function(updates) {
                        deferred.update(updates);

                });

        })
  }]);
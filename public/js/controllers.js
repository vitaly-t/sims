/* Controllers */

app.controller('unitStatusController', function($scope, $http, $sce, $q, $filter, UnitFactory) {

    $scope.unitData = {};

    var toIndicator = function(value) {
        if(value == 1) return('<span class="text-success"><i class="fa fa-check fa"></i>&nbsp;Met</span>');
        if(value == 0) return('<span class="text-danger"><i class="fa fa-exclamation-triangle fa"></i>&nbsp;Not met&nbsp;&nbsp;</span>')
    }


    UnitFactory.getUnits()
        .success(function(data) {
            $scope.unitData = data;
        })
        .error(function(error) {
            console.log('Error: ' + error);
        })
        .then(function(data) {
            $http.get('/api/v1/indicators/pull')
            .success(function(data) {
            })
            .error(function(error) {
                console.log('Error: ' + error);
            })
            return $scope.unitData;
        })
        .then(function(data) {
            console.log(data)
            var deferred = $q.defer();
            var urlCalls = [];
            for (i = 0; i < data.length; i++) { 
                urlCalls.push($http.get('/api/v1/units/' + data[i].id + '/indicators'))
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
                                indicators.push($http.get('/api/v1/indicators/' + results[i].data[j].indicator_id + '/values/last'))
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

   /* $scope.getUnitIndicatorsNumber = function(unitId) {
        $http.get('/api/v1/units/'+unitId+'/indicators')
            .success(function(data) {
                return data;
            })
            .error(function(error) {
                console.log('Error: ' + error);
            });
    }

    $scope.getUnitIndicatorsMet = function(unitId) {
        return UnitFactory.getUnitIndicatorsMet(unitId)
    }
*/
    $scope.indicator1 = "";

    $http.get('/api/v1/indicators/1/values/last')
        .success(function(data) {
            $scope.indicator1 = $sce.trustAsHtml(toIndicator(data[0]['value']));
            console.log(data);
        })
        .error(function(error) {
            console.log('Error: ' + error);
        });
});

app.controller('mainController', function ($scope, $http ) {

    $scope.formData = {};
    $scope.organizationData = {};


    $http.get('/api/v1/organizations')
        .success(function(data) {
            $scope.organizationData = data;
            console.log(data);
        })
        .error(function(error) {
            console.log('Error: ' + error);
        });

    $scope.deleteOrganization = function(organizationID) {
        $http.delete('/api/v1/organizations/' + organizationID)
        .success(function(data) {
            $scope.organizationData = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };

    $scope.createOrganization = function(organizationID) {
        $http.post('/api/v1/organizations', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.organizationData = data;
                console.log(data);
            })
            .error(function(error) {
                console.log('Error: ' + error);
            })
    };
});
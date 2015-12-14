angular.module('iothub', ['ngResource'])
    .constant('iothubConstants', {
        'host': 'http://api.iothub.pl'
    })
    .config(['$resourceProvider', function ($resourceProvider) {
        $resourceProvider.defaults.stripTrailingSlashes = false;
    }])
    .factory('ThingService', ['$resource', 'iothubConstants', function ($resource, iothubConstants) {
        return $resource(iothubConstants.host + '/things/:id');
    }]);

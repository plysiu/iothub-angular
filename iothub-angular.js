angular.module('iothub', ['ngResource'])
    .constant('iothubConfig', {
        'host': 'https://api.iothub.pl/'
    })
    .config(['$resourceProvider', function ($resourceProvider) {
        $resourceProvider.defaults.stripTrailingSlashes = false;
    }])
    .factory('ThingService'
{

}
)
;

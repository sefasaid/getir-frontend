/**
 * Created by sefasaid on 03/03/2017.
 */
angular.module('getir-services', [])

.service('getRecords', function($q) {
    this.fetch = function (params) {
        return $http.post('https://getir-bitaksi-hackathon.herokuapp.com/getRecords',params);
    };
})
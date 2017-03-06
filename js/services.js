/**
 * Created by sefasaid on 03/03/2017.
 */
angular.module('getir-services', [])

.service('getRecords', function($q,$http) {
    this.fetch = function (params) {
        return $http.post('https://cors-anywhere.herokuapp.com/'+'https://getir-bitaksi-hackathon.herokuapp.com/getRecords',params);
    };
})
/**
 * Created by sefasaid on 03/03/2017.
 */
angular.module('getir-frontend', ['getir-services','daterangepicker'])
    .controller('MyController', function($scope,getRecords) {

        $scope.date = {
            startDate: moment().subtract(1, "days"),
            endDate: moment()
        };
        $scope.options = {
            applyClass: 'btn-green',
            locale: {
                applyLabel: "Onayla",

                format: "YYYY-MM-DD", //will give you 2017-01-06

                cancelLabel: 'İptal',
                customRangeLabel: 'Özel Aralık'
            },
            ranges: {
                'Son 7 Gün': [moment().subtract(6, 'days'), moment()],
                'Son 30 Gün': [moment().subtract(29, 'days'), moment()]
            }
        }
        $scope.params = {};

        $scope.getData = function () {
            $scope.params.startDate = moment($scope.date.startDate).format('YYYY-MM-DD');
            $scope.params.endDate = moment($scope.date.endDate).format('YYYY-MM-DD');
            getRecords.fetch($scope.params).then(function (data) {
                $scope.records = data.data.records;
            },function (err) {
                $scope.error = err.data;
            })
        };

        $scope.records = {};
    });
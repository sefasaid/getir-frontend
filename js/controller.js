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

                format: "D-MMMM-YY", //will give you 6-January-17

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
            $scope.params.endDate = moment($scope.date.startDate).format('YYYY-MM-DD');
            getRecords.fetch($scope.params).then(function (data) {
                console.log(data);
            },function (err) {
                console.log(err);
            })
        }
    });
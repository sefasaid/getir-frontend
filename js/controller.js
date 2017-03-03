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
                customRangeLabel: 'Özel Alan'
            },
            ranges: {
                'Son 7 Gün': [moment().subtract(6, 'days'), moment()],
                'Son 30 Gün': [moment().subtract(29, 'days'), moment()]
            }

        }
    });
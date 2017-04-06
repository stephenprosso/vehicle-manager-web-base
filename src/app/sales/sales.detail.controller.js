(function() {
    'use strict';

    angular
        .module('app.sales')
        .controller('SalesDetailsController', SalesDetailsController);

    SalesDetailsController.$inject = ['salesFactory','$stateParams', 'SweetAlert'];

    /* @ngInject */
    function SalesDetailsController(salesFactory, $stateParams, SweetAlert) {
        var vm = this;

        activate();

        function activate() {
            salesFactory
                .getById($stateParams.id)
                .then(function(sale) {
                    vm.sale = sale;
                });
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomersDetailsController', CustomersDetailsController);

    CustomersDetailsController.$inject = ['customersFactory'];

    /* @ngInject */
    function CustomersDetailsController(customersFactory, $stateParams) {
        var vm = this;
        activate();

        function activate() {
            customersFactory
                .getById($stateParams.id)
                .then(function(customer) {
                    vm.customer = customer;
                });
        }
    }
})();

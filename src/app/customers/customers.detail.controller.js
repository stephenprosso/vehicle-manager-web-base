(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomersDetailsController', CustomersDetailsController);

    CustomersDetailsController.$inject = ['customersFactory', 'SweetAlert', '$stateParams'];

    /* @ngInject */
    function CustomersDetailsController(customersFactory, SweetAlert, $stateParams) {
        var vm = this;
        vm.save = save;
        vm.title = "New Customer";
        activate();

        function activate() {
            var customerId = $stateParams.id;

            if (customerId) {
                vm.title = "Edit Customer";
                customersFactory
                    .getById(customerId)
                    .then(function(customer) {
                        vm.customer = customer;
                    })
                    .catch(function(error) {
                        alert(error);
                    });
            }
        }

        function save() {
            var customerId = $stateParams.id;

            if (customerId) {
                customersFactory
                    .update(vm.customer.customerId, vm.customer)
                    .then(function() {
                        SweetAlert.swal("Customer saved!", "You did it!", "success");
                    })
            } else {
                customersFactory
                    .create(vm.customer)
                    .then(function() {
                        SweetAlert.swal("Customer saved!", "Great Job!", "success");
                    });
            }
        }
    }
})();

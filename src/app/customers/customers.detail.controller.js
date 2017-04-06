(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomersDetailsController', CustomersDetailsController);

    CustomersDetailsController.$inject = ['customersFactory', 'SweetAlert', '$stateParams' ];

    /* @ngInject */
    function CustomersDetailsController(customersFactory, SweetAlert, $stateParams) {
        var vm = this;
        activate();
        vm.save = save;

        function activate() {
            var customerId = $stateParams.id;
            customersFactory
                .getById(customerId)
                .then(function(customer) {
                    vm.customer = customer;
                })
                .catch(function(error) {
                    alert(error);
                });
        }

        function save() {
            customersFactory
            .update(vm.customer.customerId, vm.customer)
            .then(function(){
                SweetAlert.swal("Customer saved!", "You did it!", "success");
              })
              .catch(function(error){
                alert(error);
              });
        }
    }
})();

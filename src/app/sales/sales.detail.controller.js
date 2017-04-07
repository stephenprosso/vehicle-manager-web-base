(function() {
    'use strict';

    angular
        .module('app.sales')
        .controller('SalesDetailsController', SalesDetailsController);

    SalesDetailsController.$inject = ['salesFactory', 'vehiclesFactory', 'customersFactory', '$stateParams', 'SweetAlert'];

    /* @ngInject */
    function SalesDetailsController(salesFactory, vehiclesFactory, customersFactory, $stateParams, SweetAlert) {
        var vm = this;
        vm.save = save;
        vm.title = "New Sale";
        activate();

        function activate() {
            var saleId = $stateParams.id;

            customersFactory
                .getAll()
                .then(function(customers) {
                    vm.customers = customers;
                });

            vehiclesFactory
                .getAll()
                .then(function(vehicles) {
                    vm.vehicles = vehicles;
                });
            if (saleId) {
                vm.title = "Edit Sale";
                salesFactory
                    .getById(saleId)
                    .then(function(sale) {
                        vm.sale = sale;
                    })
                    .catch(function(error) {
                        alert(error);
                    });

            }

        }

        function save() {

            var saleId = $stateParams.id;

            vm.sale.customerId = vm.selectedCustomer.customerId;
            vm.sale.vehicleId = vm.selectedVhicle.vehicleId;

            if (salesId) {
                salesFactory
                    .update(vm.sale.saleId, vm.sale)
                    .then(function() {
                        SweetAlert.swal("Sale Info saved!", "You did it!", "success");
                    })
            } else {
                salesFactory
                    .create(vm.sale)
                    .then(function() {
                        SweetAlert.swal("sale saved!", "Great Job!", "success");

                    });
            }
        }
    }
})();

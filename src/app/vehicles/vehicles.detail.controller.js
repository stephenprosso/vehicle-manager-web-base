(function() {
        'use strict';

        angular
            .module('app.vehicles')
            .controller('VehiclesDetailsController', VehiclesDetailsController);

        VehiclesDetailsController.$inject = ['vehiclesFactory','$stateParams'];

        /* @ngInject */
        function VehiclesDetailsController(vehiclesFactory, $stateParams) {
            var vm = this;

            activate();

            function activate() {
                var vehicleId = $stateParams.id;

                vehiclesFactory
                    .getById(vehicleId)
                    .then(function(vehicle) {

                        vm.vehicle = vehicle;
                    })
                    .catch(function(error) {
                        alert(error);
                    });
            }

            function save() {
                vehiclesFactory
                    .update(vm.vehicle.vehilceId, vm.vehicle)
                    .then(function() {
                        SweetAlert.swal("Customer saved!", "You did it!", "success");
                    })
                    .catch(function(error) {
                        alert(error);
                    });
                  }
            }
        })();

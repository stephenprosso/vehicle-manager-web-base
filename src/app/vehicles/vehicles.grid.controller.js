(function() {
    'use strict';

    angular
        .module('app.vehicles')
        .controller('VehiclesGridController', VehiclesGridController);

    VehiclesGridController.$inject = ['SweetAlert', 'vehiclesFactory'];

    /* @ngInject */
    function VehiclesGridController(SweetAlert, vehiclesFactory) {
        var vm = this;
        vm.remove = remove;
        activate();

        function activate() {
            vehiclesFactory
                .getAll()
                .then(function(vehicles) {
                    vm.vehicles = vehicles;

                });
        }

        function remove(vehicle) {

            SweetAlert.swal({
                    title: "Are you sure?",
                    text: "Your will not be able to recover this Vehicle's data!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, delete them!",
                    cancelButtonText: "Cancel",
                    closeOnConfirm: false,
                    closeOnCancel: false
                },
                function(isConfirm) {
                    if (isConfirm) {
                        vehiclesFactory
                            .remove(vehicle.vehicleId)
                            .then(function() {
                                SweetAlert.swal("Deleted!", "This Vehicle has been deleted!", "success");
                                vm.vehicles.splice(vm.vehicles.indexOf(vehicle), 1);
                            });

                    } else {
                        SweetAlert.swal("Cancelled", "You Dodged a Bullet!", "error");
                    }
                });
        }
    }
})();

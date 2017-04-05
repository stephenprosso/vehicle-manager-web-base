(function() {
    'use strict';

    angular
        .module('app.vehicles')
        .controller('VehiclesDetailsController', VehiclesDetailsController);

    VehiclesDetailsController.$inject = ['vehiclesFactory'];

    /* @ngInject */
    function VehiclesDetailsController(vehiclesFactory) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();

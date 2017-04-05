(function() {
    'use strict';

    angular
        .module('app.sales')
        .controller('SalesDetailsController', SalesDetailsController);

    SalesDetailsController.$inject = ['salesFactory'];

    /* @ngInject */
    function SalesDetailsController(salesFactory) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();

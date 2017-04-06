(function() {
    'use strict';

    angular
        .module('app.sales')
        .controller('SalesGridController', SalesGridController);

    SalesGridController.$inject = ['SweetAlert', 'salesFactory'];

    /* @ngInject */
    function SalesGridController(SweetAlert, salesFactory) {
        var vm = this;
        vm.remove = remove;
        activate();

        function activate() {
            salesFactory
                .getAll()
                .then(function(sales) {
                    vm.sales = sales;
                });

        }

        function remove(sale) {

            SweetAlert.swal({
                    title: "Are you sure?",
                    text: `Your will not be able to recover data!`,
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
                        salesFactory
                            .remove(sale.saleId)
                            .then(function() {
                                SweetAlert.swal("Deleted!", "The info has been deleted.", "success");
                                vm.sales.splice(vm.sales.indexOf(sale), 1);
                            });

                    } else {
                        SweetAlert.swal("Cancelled", `Info is safe!`, "error");
                    }
                });
        }
    }

})();

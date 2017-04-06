(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'oitozero.ngSweetAlert',
            'app.dashboard',
            'app.customers',
            'app.vehicles',
            'app.sales'
        ])
        .value('apiUrl', 'http://localhost:50389/api/')
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/dashboard');

            // configure each state

            $stateProvider
                .state('dashboard', {
                    url: '/dashboard', //http:localhost:3000/#/dashboard
                    controller: 'DashboardController as dashboardCtrl', //ngcontroller
                    templateUrl: 'app/dashboard/dashboard.html'
                });

            $stateProvider
                .state('customers', {
                    url: '/customers',
                    abstract: true,
                    template: '<div ui-view></div>'
                })
                .state('customers.grid', {
                    url: '/grid',
                    controller: 'CustomersGridController as customersGridCtrl',
                    templateUrl: 'app/customers/customers.grid.html'
                })
                .state('customers.detail', {
                    url: '/detail/:id',
                    controller: 'CustomersDetailsController as customersDetailCtrl',
                    templateUrl: 'app/customers/customers.detail.html'
                });
            $stateProvider
                .state('vehicles', {
                    url: '/vehicles',
                    abstract: true,
                    template: '<div ui-view></div>'
                })
                .state('vehicles.grid', {
                    url: '/grid',
                    controller: 'VehiclesGridController as vehiclesGridCtrl',
                    templateUrl: 'app/vehicles/vehicles.grid.html'
                })
                .state('vehicles.detail', {
                    url: '/detail/:id',
                    controller: 'VehiclesDetailsController as vehiclesDetailsCtrl',
                    templateUrl: 'app/vehicles/vehicles.detail.html'
                });
                $stateProvider //sales
                    .state('sales', {
                        url: '/sales',
                        abstract: true,
                        template: '<div ui-view></div>'
                    })
                    .state('sales.grid', {
                        url: '/grid',
                        controller: 'SalesGridController as salesGridCtrl',
                        templateUrl: 'app/sales/sales.grid.html'
                    })
                    .state('sales.detail', {
                        url: '/detail/:id',
                        controller: 'SalesDetailsController as salesDetailsCtrl',
                        templateUrl: 'app/sales/sales.detail.html'
                    });


        });
})();

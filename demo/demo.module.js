angular.module('demo', ['ea.treeview', 'ui.router']).config(function($stateProvider, $locationProvider) {
    $stateProvider
        .state('default', {
            templateUrl: '/Angular-Tree-View/demo/api.html',
            url: '/'
        })
        .state('api', {
            abstract: true,
            template: '<div ui-view></div>',            
            url: '/Angular-Tree-View/api'
        })
        .state('api.treeView', {
            templateUrl: '/Angular-Tree-View/demo/treeViewApi.html',
            url: '/treeview'
        })
        .state('api.treeViewItem', {
            templateUrl: '/Angular-Tree-View/demo/treeViewItemApi.html',
            url: '/treeviewitem'
        })
        .state('readme', {
            templateUrl: '/Angular-Tree-View/demo/readMe.html',
            url: '/Angular-Tree-View/readme'
        })
        .state('example', {
            abstract: true,
            template: '<div ui-view></div>',
            url: '/Angular-Tree-View/examples'
        })
        .state('example.basic', {
            controller: 'basicController',
            templateUrl: '/Angular-Tree-View/demo/basicExample.html',
            url: '/basic'
        })
        .state('example.advanced', {
            controller: 'advancedController',
            templateUrl: '/Angular-Tree-View/demo/advancedExample.html',
            url: '/advanced'
        });

        $locationProvider.html5Mode(true);
}).controller('mainController', function($scope, $state, eaTreeViewFactory){
    $scope.model = {
        menu: [            
            {
                display: 'API', items: [
                    { display: 'Tree View', isActive: false, stateName: 'api.treeView' },
                    { display: 'Tree View Item', isActive: false, stateName: 'api.treeViewItem' }
                ]
            },
            { display: 'Read Me', isActive: false, stateName: 'readme' },
            {
                display: 'Examples',
                expanded: false,
                items: [
                    { display: 'Basic', isActive: false, stateName: 'example.basic' },
                    { display: 'Advanced', isActive: false, stateName: 'example.advanced' }
                ]
            }
        ]
    };

    eaTreeViewFactory.setItems($scope.model.menu);
    eaTreeViewFactory.bindEvent();

    $scope.go = function (item) {
        $state.go(item.stateName, item);
    };
}).controller('basicController', function($scope, eaTreeViewFactory) {
    $scope.model = {
        simpsons: [
            {
                display: 'Abe',
                items: [
                    {display: 'Homer', items: [{display: 'Bart', stateName: 'Homer-Bart'}, {display: 'Lisa', stateName: 'Homer-Lisa'}, {display: 'Maggie', stateName: 'Homer-Maggie'}]},
                    {display: 'Herb', stateName: 'Herb'},
                    {display: 'Abbie', stateName: 'Abbie'}
                ]
            },
            {
                display: 'Jacqueline',
                items: [
                    {display: 'Patty', stateName: 'Patty'},
                    {display: 'Selma', stateName: 'Selma'},
                    {display: 'Marge', items: [{display: 'Bart', stateName: 'Marge-Bart'}, {display: 'Lisa', stateName: 'Marge-Lisa'}, {display: 'Maggie', stateName: 'Marge-Maggie'}]},
                ]
            }
        ]
    };
    
    eaTreeViewFactory.setItems($scope.model.simpsons, $scope.$id);
    
    $scope.show = function(item) {
        $scope.model.imageSource = '/Angular-Tree-View/demo/images/' + item.stateName + '.jpg';
        $scope.model.imageAlt = item.display;
    };
}).controller('advancedController', function($scope, eaTreeViewFactory) {
    $scope.model = {
        simpsons: [
            {
                display: 'Abe',
                items: [
                    {display: 'Homer', items: [{display: 'Bart', stateName: 'Homer-Bart'}, {display: 'Lisa', stateName: 'Homer-Lisa'}, {display: 'Maggie', stateName: 'Homer-Maggie'}]},
                    {display: 'Herb', stateName: 'Herb'},
                    {display: 'Abbie', stateName: 'Abbie'}
                ]
            },
            {
                display: 'Jacqueline',
                items: [
                    {display: 'Patty', stateName: 'Patty'},
                    {display: 'Selma', stateName: 'Selma'},
                    {display: 'Marge', items: [{display: 'Bart', stateName: 'Marge-Bart'}, {display: 'Lisa', stateName: 'Marge-Lisa'}, {display: 'Maggie', stateName: 'Marge-Maggie'}]},
                ]
            }
        ],
        characters: [
            {display: 'Howard Cunningham', kids: [{display: 'Richie Cunningham', stateName: 'Richie'}, {display: 'Joanie Cunningham', stateName: 'Joanie'}]},
            {display: 'Potsie', stateName: 'Potsie', catchPhrase: 'What\'s a catch phrase?'},
            {display: 'Fonzie', stateName: 'Fonzie', catchPhrase: 'Heeeeeeeeey!'}
        ]
    };

    $scope.simpsonsKey = $scope.$id + 'simpsons';
    $scope.happyDaysKey = $scope.$id + 'characters';

    eaTreeViewFactory.setItems($scope.model.simpsons, $scope.simpsonsKey);
    eaTreeViewFactory.setItems($scope.model.characters, $scope.happyDaysKey);

    $scope.showPicture = function(item) {
        $scope.model.catchPhrase = null;
        $scope.model.imageSource = '/Angular-Tree-View/demo/images/' + item.stateName + '.jpg';
        $scope.model.imageAlt = item.display;
    };

    $scope.showCatchPhrase = function(item) {
        $scope.model.imageSource = null;
        $scope.model.imageAlt = null;
        $scope.model.catchPhrase = item.catchPhrase;
    };
}).run(function($rootScope, eaTreeViewFactory) {
    $rootScope.$on('$stateChangeSuccess', function (event, args) {
        eaTreeViewFactory.resetItemTemplateUrl();
    });
});
angular.module('ea.treeview').directive('eaTreeView', function() {
    return {
        controller: function ($scope) {
            this.isRoot = $scope.isRoot;
        },
        link: function (scope) {
            scope.callback = scope.callback();
        },
        restrict: 'E',
        scope: {
            callback: '&',
            isRoot: '@',
            items: '='
        },
        template:
            '<ea-tree-view-item item="item" callback="callback" data-ng-repeat="item in items"></ea-tree-view-item>'
    };
});
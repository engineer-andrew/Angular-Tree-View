angular.module('ea.treeview').directive('eaTreeView', function() {
    return {
        controller: function ($scope) {
            this.isRoot = $scope.isRoot;
        },
        link: function (scope) {
            scope.branchName = scope.branchName || 'items';
            scope.callback = scope.callback();
        },
        restrict: 'E',
        scope: {
            branchName: '@',
            callback: '&',
            datasetId: '=',
            isRoot: '@',
            items: '='
        },
        template:
            '<ea-tree-view-item dataset-id="datasetId" item="item" branch-name="{{branchName}}" callback="callback" data-ng-repeat="item in items"></ea-tree-view-item>'
    };
});
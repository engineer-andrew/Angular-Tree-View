angular.module('ea.treeview').directive('eaTreeView', function(eaTreeViewFactory) {
    return {
        controller: function ($scope) {
            this.isRoot = $scope.isRoot;
        },
        link: {
            pre: function(scope) {
                eaTreeViewFactory.setItemTemplateUrl(scope.itemTemplateUrl);
            },
            post: function (scope, element, attributes) {
                scope.branchName = scope.branchName || 'items';                
                scope.callback = scope.callback();
            }
        },
        restrict: 'E',
        scope: {
            branchName: '@',
            callback: '&',
            datasetId: '=',
            isRoot: '@',
            items: '=',
            itemTemplateUrl: '@'
        },
        template:
            '<ea-tree-view-item dataset-id="datasetId" item="item" branch-name="{{branchName}}" callback="callback" data-ng-repeat="item in items"></ea-tree-view-item>'
    };
});
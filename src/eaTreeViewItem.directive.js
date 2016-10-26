angular.module('ea.treeview').directive('eaTreeViewItem', function(eaTreeViewFactory) {
    return {
        link: function (scope, element, attributes, controller) {
            scope.item.items = scope.item[scope.branchName];
            // assign the property on scope to the result of invoking the callback
            // to properly propagate the callback up the tree
            scope.callback = scope.callback();

            // activate the clicked-on item
            scope.activate = function () {
                // effectively applies the active class to the clicked-on item
                eaTreeViewFactory.setActive(scope.item.stateName, scope.datasetId);
                // triggers the callback all the way back up the tree
                if (!!scope.callback) {
                    scope.callback(scope.item);
                }                
            };

            // determine whether the item has children to properly manipulate the DOM
            // no item can be a selectable item at the same time it is a parent
            scope.hasChildren = function () {
                return !!scope.item.items && !!scope.item.items.length;
            };

            // determine whether the item is a root item to properly manipulate the DOM
            scope.hasParent = function () {
                // controller is the required eaTreeView controller, which defines the isRoot property
                return !controller.isRoot;
            };

            // expand/collapse a parent item
            scope.toggleExpanded = function () {
                scope.item.expanded = !scope.item.expanded;
            };
        },
        require: '^eaTreeView',
        restrict: 'E',
        scope: {
            branchName: '@',
            callback: '&',
            datasetId: '=',
            item: '='
        },
        templateUrl: function(element, attributes) {
            return eaTreeViewFactory.getItemTemplateUrl();
        }
    };
});
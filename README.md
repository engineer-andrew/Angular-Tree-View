# Angular-Tree-View
A dynamic tree view directive for Angular 1.5.*

### Installation
```
$ npm install angular-tree-view
```

### Usage
#### With Templates Included
```
<script src="/node_modules/angular-tree-view/dist/eaTreeView-tpls.min.js"></script>
```
#### Without Templates
```
<script src="/node_modules/angular-tree-view/dist/eaTreeView.min.js"></script>
```
#### To Use One Tree View
```
<ea-tree-view is-root="true" items="model.simpsons" callback="show"></ea-tree-view>

angular.module('app', ['ea.treeview']).controller('mainController', function($rootScope, $scope, eaTreeViewFactory) {
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
    
    eaTreeViewFactory.setItems($scope.model.simpsons);
    
    $scope.show = function(item) {
      console.log(item);
    };
});
```
#### To Use Multiple Tree Views
```
<ea-tree-view is-root="true" items="model.simpsons" dataset-id="$id" callback="show"></ea-tree-view>
<ea-tree-view is-root="true" items="model.characters" dataset-id="$id" callback="show"></ea-tree-view>

angular.module('demo', ['ea.treeview']).controller('simpsonsController', function($scope, eaTreeViewFactory) {
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
    
    eaTreeViewFactory.setItems($scope.model.simpsons);
    
    $scope.show = function(item) {
        $scope.model.imageSource = 'demo/images/' + item.stateName + '.jpg';
        $scope.model.imageAlt = item.display 
    };
}).controller('happyDaysController', function($scope, eaTreeViewFactory) {
    $scope.model = {
        characters: [
            {display: 'Howard Cunningham', items: [{display: 'Richie Cunningham', stateName: 'Richie'}, {display: 'Joanie Cunningham', stateName: 'Joanie'}]},
            {display: 'Potsie', stateName: 'Potsie'},
            {display: 'Fonzie', stateName: 'Fonzie'}
        ]
    };

    eaTreeViewFactory.setItems($scope.model.characters, $scope.$id);    
});
```

### Demo
The demo is available on <a href="http://plnkr.co/edit/hR3TiONz3jOqJhsWSizR?p=preview" target="_blank">plnkr</a> or <a href="https://engineer-andrew.github.io/Angular-Tree-View/index.html" target="_blank">Github Pages</a>.

### Usage Notes
1. The first (root) array can be named anything, but all children of that root have to be named `items` otherwise the directive won't bind properly.  I'm going to look into making that configurable, but for now it is what it is.
2. Passing the initial list to `eaTreeViewFactory.setItems` is how everything gets wired up to select the active item and expand the tree on navigation so make sure to do that!
3. If you're using ui-router and you want the tree to expand and select the current state when you navigate to a state via URL, you need to call `eaTreeViewFactory.bind()`.
4. You can also bind to any other event in case you have custom navigation or you're using the tree view for some other purpose, just pass the name of the event to `eaTreeViewFactory.bind()` to do so: (`eaTreeViewFactory.bind('someEvent')`).
5. Even if you don't want to use a callback, you still have to create one.  If you look in the source code I have a TODO to fix that, but right now - again - it is what it is.
6. There are four styles that are not included in the distributed (minified) js file.  I'm working on a way to resolve that more easily, but for now you can copy/paste them from eaTreeView.css or you can define your own.
    1. clickable
    2. active
    3. tree-parent
    4. tree-child
7. The `is-root` attribute is what allows the tree to expand properly on navigation so be sure to include that if you're using the tree view for navigation purposes

### Quick Notes
Right now the module uses Font Awesome classes to display the expand/collapse chevrons (arrows/icons) on categories.  Although I plan to make that configurable in the future, an easy work around for now is to define a few classes you want to use to style the icons.  By creating the classes `fa-chevron-right` *(to be shown when the node is collapsed)* and `fa-chevron-down` *(to be shown when the node is expanded)* you'll be able to define how the arrows should look.  Or you can just use Font Awesome, but I'd advise against that if you're going to import it **just** for this.

In case you can't tell I'm brand new to Github and npm so I'm going to do my best to document and update this directive as quickly and as often as I can.  If something is frustrating to you, I welcome input so please reach out and let me know.  Thanks! 
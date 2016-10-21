# Angular-Tree-View
A dynamic tree view directive for Angular 1.5.*

### Installation
```
$ npm install angular-tree-view
```

### Usage
```
<script src="/node_modules/angular-tree-view/dist/eaTreeView-tpls.min.js"></script>
<script src="/node_modules/angular-tree-view/dist/eaTreeView.min.js"></script>

<ea-tree-view is-root="true" items="model.simpsons" callback="show"></ea-tree-view>

angular.module('app').controller('mainController', function($scope) {
    $scope.model = {
        simpsons: [
            {
                display: 'Abe',
                items: [
                    {display: 'Homer', items: [{display: 'Bart'}, {display: 'Lisa'}, {display: 'Maggie'}]},
                    {display: 'Herb'},
                    {display: 'Abbie'}
                ]
            },
            {
                display: 'Jacqueline',
                items: [
                    {display: 'Patty'},
                    {display: 'Selma'},
                    {display: 'Marge', items: [{display: 'Bart'}, {display: 'Lisa'}, {display: 'Maggie'}]}
                ]
            }
        ]
    };
});
```

### Quick Notes
Right now the module uses Font Awesome classes to display the expand/collapse chevrons (arrows/icons) on categories.  Although I plan to make that configurable in the future, an easy work around for now is to define a few classes you want to use to style the icons.  By creating the classes `fa-chevron-right` *(to be shown when the node is collapsed)* and `fa-chevron-down` *(to be shown when the node is expanded)* you'll be able to define how the arrows should look.  Or you can just use Font Awesome, but I'd advise against that if you're going to import it **just** for this.

In case you can't tell I'm brand new to Github and npm so I'm going to do my best to document and update this directive as quickly and as often as I can.  If something is frustrating to you, I welcome input so please reach out and let me know.  Thanks! 
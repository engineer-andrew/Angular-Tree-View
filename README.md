# Angular-Tree-View
A dynamic tree view directive for Angular 1.5.*

## Installation
```
$ npm install angular-tree-view
```

## Demo
The demo is now only available on <a href="https://engineer-andrew.github.io/Angular-Tree-View/index.html" target="_blank">Github Pages</a>.

### Quick Notes
Right now the module uses Font Awesome classes to display the expand/collapse chevrons (arrows/icons) on categories.  Although I plan to make that configurable in the future, an easy work around for now is to define a few classes you want to use to style the icons.  By creating the classes `fa-chevron-right` *(to be shown when the node is collapsed)* and `fa-chevron-down` *(to be shown when the node is expanded)* you'll be able to define how the arrows should look.  Or you can just use Font Awesome, but I'd advise against that if you're going to import it **just** for this.

In case you can't tell I'm brand new to Github and npm so I'm going to do my best to document and update this directive as quickly and as often as I can.  If something is frustrating to you, I welcome input so please reach out and let me know.  Thanks! 

## API
### Tree View
##### branch-name
<span style="background-color:red;padding:.5em;color:white;border-radius:.25em;">String</span><span style="margin-left:.5em;background-color:green;padding:.5em;color:white;border-radius:.25em;">Optional</span>
If set, specifies the property that will contain additional children
Since:
* 1.0.5
Default Value:
* items

**Example**
```
<ea-tree-view ... branch-name="kids" ...></ea-tree-view>
angular.module('demo', ['ea.treeview']).controller('mainController', function($scope) {
    $scope.model.items = [
        {
            display: 'What to Show', kids: [
                {
                    display: 'A child display value', kids: [
                        {display: 'A grandchild display value'}
                    ]
                }
            ]
        }
    ];
});
```

##### callback <span style="background-color:black;padding:.5em;color:white;border-radius:.25em;">Function</span><span style="margin-left:.5em;background-color:green;padding:.5em;color:white;border-radius:.25em;">Optional</span>
If set, specifies the name of the function on the root controller to invoke when an item is clicked

The callback function accepts the item that was clicked as a parameter.
Since:
* 1.0.0
Default Value:
* N/A

**Example**
```
<ea-tree-view ... callback="go" ...></ea-tree-view>
angular.module('demo', ['ea.treeview']).controller('mainController', function($scope) {
    $scope.go = function(item) {
        console.log(item);
    }
});
```

##### dataset-id <span style="background-color:red;padding:.5em;color:white;border-radius:.25em;">String</span><span style="margin-left:.5em;background-color:blue;padding:.5em;color:white;border-radius:.25em;">Number</span><span style="margin-left:.5em;background-color:green;padding:.5em;color:white;border-radius:.25em;">Optional</span>
*Only necessary when multiple Tree Views are used in a single module*

If set, specifies the id to use to allow each Tree View within a single module to identify its own data without interfering with other Tree View controls

Since:
* 1.0.5
Default Value:
* N/A

**Example**
```
<ea-tree-view ... dataset-id="$id" ...></ea-tree-view>
```

##### is-root <span style="background-color:grey;color:white;padding:.5em;;border-radius:.25em;">Boolean</span><span style="margin-left:.5em;background-color:green;padding:.5em;color:white;border-radius:.25em;">Optional</span>
*Only necessary when using a single Tree View with a router (such as ui-router)*

If set, specifies that the Tree View should be the root, which allows the router to properly expand the parents of a route and "select" the matching item based on the route

Since:
* 1.0.2
Default Value:
* false

**Example**
```
<ea-tree-view ... is-root="false" ...></ea-tree-view>
```

##### items <span style="background-color:orange;color:white;padding:.5em;;border-radius:.25em;">Array</span><span style="margin-left:.5em;background-color:yellow;padding:.5em;color:red;border-radius:.25em;">Required</span>
The array containing the items to build the Tree View

Since:
* 1.0.0

**Example**
```
<ea-tree-view ... items="friggafromptons" ...></ea-tree-view>
angular.module('demo', ['ea.treeview']).controller('mainController', function($scope) {
    $scope.model.friggafromptons = [
        {
            display: 'What to Show', kids: [
                {
                    display: 'A child display value', kids: [
                        {display: 'A grandchild display value'}
                    ]
                }
            ]
        }
    ];
});
```

##### item-template-url <span style="background-color:red;padding:.5em;color:white;border-radius:.25em;">String</span><span style="margin-left:.5em;background-color:green;padding:.5em;color:white;border-radius:.25em;">Optional</span>
The URL of the template to use in the event you've created your own.

*Note: Only one template may be specified for all Tree Views in the module. There is currently no way to specify a different template for each Tree View*

Since:
* 1.0.5

**Example**
```
<ea-tree-view ... item-template-url="/templates/customItemTemplate.html" ...></ea-tree-view>
```

<span id="itemAPI"></span>
### Tree View Item
##### branch-name <span style="background-color:red;padding:.5em;color:white;border-radius:.25em;">String</span><span style="margin-left:.5em;background-color:green;padding:.5em;color:white;border-radius:.25em;">Optional</span>
If set (on Tree View), specifies the property that will contain additional children

This property is passed through to the Tree View Item so that it can be passed to additional Tree Views created as children of the item
Since:
* 1.0.5
Default Value:
* items

##### callback <span style="background-color:black;padding:.5em;color:white;border-radius:.25em;">Function</span><span style="margin-left:.5em;background-color:green;padding:.5em;color:white;border-radius:.25em;">Optional</span>
If set (on Tree View), specifies the name of the function on the root controller to invoke when an item is clicked

The callback function accepts the item that was clicked as a parameter.

This property is passed through to the Tree View Item so that it can be passed to additional Tree Views created as children of the item
Since:
* 1.0.0
Default Value:
* N/A

##### dataset-id <span style="background-color:red;padding:.5em;color:white;border-radius:.25em;">String</span><span style="margin-left:.5em;background-color:blue;padding:.5em;color:white;border-radius:.25em;">Number</span><span style="margin-left:.5em;background-color:green;padding:.5em;color:white;border-radius:.25em;">Optional</span>
*Only necessary when multiple Tree Views are used in a single module*

If set (on Tree View), specifies the id to use to allow each Tree View within a single module to identify its own data without interfering with other Tree View controls

This property is passed through to the Tree View Item so that it can be passed to additional Tree Views created as children of the item
Since:
* 1.0.5
Default Value:
* N/A

##### item <span style="background-color:black;padding:.5em;color:white;border-radius:.25em;">Object</span><span style="margin-left:.5em;background-color:yellow;padding:.5em;color:red;border-radius:.25em;">Required</span>
Identifies the item whose properties will be used to render the directive

Since:
* 1.0.0
Default Value:
* N/A

## Usage
To use angular-tree-view with the built-in item template (recommended) reference the `eaTreeView-tpls.min.js` file.  If you use npm to get the package you'd reference `/node_modules/angular-tree-view/dist/eaTreeView-tpls.min.js`.

To use angular-tree-view with a custom item template (advanced) reference the `eaTreeView.min.js` file.  If you use npm to get the package you'd reference `/node_modules/angular-tree-view/dist/eaTreeView.min.js`.  You must also use the `template-url` option on the directive to specify where your custom template is.

*If you decide to create your own item template, please refer to the <a href="#itemAPI">Tree View Item API</a> section of this document to see what scope properties are passed from the Tree View directive.*

##### The default item template markup looks like this:
```
<div ng-class="{'tree-trunk': !hasParent()}">
    <div data-ng-if="hasChildren()" class="tree-parent" data-ng-class="{'tree-child': hasParent()}">
        <div data-ng-click="toggleExpanded()" class="clickable">
            <i class="fa" data-ng-class="{'fa-chevron-right': !item.expanded, 'fa-chevron-down': item.expanded}"></i>
            <span>{{item.display}}</span>
        </div>
        <ea-tree-view data-ng-if="item.expanded" branch-name="{{branchName}}" dataset-id="datasetId" callback="callback" items="item.items"></ea-tree-view>
    </div>
    <div data-ng-if="!hasChildren()" data-ng-click="activate()" class="tree-child clickable" data-ng-class="{active: item.isActive}">{{item.display}}</div>
</div>
```

As you can see in the default markup we make use of three built-in Angular directives: ng-class, ng-if, and ng-click.  **Keep in mind that this markup is repeated for each child in the tree structure so making this too big or complex might cause problems!**

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

### Usage Notes
1. If you want to specify the name of the property that holds children on child nodes, use the `branch-name` attribute in the directive.  Otherwise, all of your nested children will need to be named 'items'.
2. The `is-root` attribute is what allows the tree to expand properly on navigation so be sure to include that if you're using the tree view for navigation purposes
3. Passing the initial list to `eaTreeViewFactory.setItems` is how everything gets wired up to select the active item and expand the tree on navigation so make sure to do that!
4. If you're using ui-router and you want the tree to expand and select the current state when you navigate to a state via URL, you need to call `eaTreeViewFactory.bind()`.
5. You can also bind to any other event in case you have custom navigation or you're using the tree view for some other purpose, just pass the name of the event to `eaTreeViewFactory.bind()` to do so: (`eaTreeViewFactory.bind('someEvent')`).
6. There are four styles that are not included in the distributed (minified) js file.  I'm working on a way to resolve that more easily, but for now you can copy/paste them from eaTreeView.css or you can define your own.
    1. `clickable`
    * This is used to change the cursor when the user hovers over an item
    2. `active`
    * This is used to highlight which item is active
    3. `tree-parent`
    * This is used to style the tree view parent items (any item that has children of its own is considered a parent)
    4. `tree-child`
    * This is used to style all items that have parents (even if the item also has children of its own)

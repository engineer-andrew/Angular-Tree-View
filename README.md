# Angular-Tree-View
A dynamic tree view directive for Angular 1.5.*

### Installation
```
$ npm install angular-tree-view
```

### Code
The code is on [Github](https://github.com/engineer-andrew/Angular-Tree-View).

### Demo
Check out all of the demos on [Github Pages](https://engineer-andrew.github.io/Angular-Tree-View/).

### Quick Notes
Right now the module uses Font Awesome classes to display the expand/collapse chevrons (arrows/icons) on categories.  Although I plan to make that configurable in the future, an easy work around for now is to define a few classes you want to use to style the icons.  By creating the classes `fa-chevron-right` *(to be shown when the node is collapsed)* and `fa-chevron-down` *(to be shown when the node is expanded)* you'll be able to define how the arrows should look.  Or you can just use Font Awesome, but I'd advise against that if you're going to import it **just** for this.

In case you can't tell I'm brand new to Github and npm so I'm going to do my best to document and update this directive as quickly and as often as I can.  If something is frustrating to you, I welcome input so please reach out and let me know.  Thanks! 

### API
You can check out the APIs on the [Github Pages](https://engineer-andrew.github.io/Angular-Tree-View/) site by expanding API and choosing which directive you want (hint: you probably want to look at the Tree View Item API unless you're using your own item template).

### Usage
To use angular-tree-view with the built-in item template (recommended) reference the `eaTreeView-tpls.min.js` file.  If you use npm to get the package you'd reference `/node_modules/angular-tree-view/dist/eaTreeView-tpls.min.js`.

To use angular-tree-view with a custom item template (advanced) reference the `eaTreeView.min.js` file.  If you use npm to get the package you'd reference `/node_modules/angular-tree-view/dist/eaTreeView.min.js`.  You must also use the `template-url` option on the directive to specify where your custom template is.

*If you decide to create your own item template, please refer to the [Tree View Item API](https://engineer-andrew.github.io/Angular-Tree-View/) to see what scope properties are passed from the Tree View directive.*

**The default item template markup looks like this:**
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
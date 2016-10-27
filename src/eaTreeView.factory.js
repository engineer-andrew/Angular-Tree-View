angular.module('ea.treeview').factory('eaTreeViewFactory', function($rootScope) {
    // hide the object from external forces (of evil)
    var concealed = {
        items: {}
    };

    // expose a public object with access methods
    var visible = {
        // allow the user to opt-in to listening for the ui-router $stateChangeSuccess event
        // or any other event they want to specify (in case they're not using ui-router)
        bindEvent: function(name, datasetId) {
            name = name || '$stateChangeSuccess';
            datasetId = datasetId || 'default';
            $rootScope.$on(name, function (event, args) {
                visible.setActive(args.name, datasetId);
            });
        },
        // get the concealed items array
        getItems: function(datasetId) {
            datasetId = datasetId || 'default';
            return concealed.items[datasetId];
        },
        getItemTemplateUrl: function() {
            return concealed.itemTemplateUrl;
        },
        resetItemTemplateUrl: function() {
            concealed.itemTemplateUrl = null;
        },
        // set the active item and expand all ancestors of the active item
        setActive: function(state, datasetId, items, matchFound, nestingLevel, stopExpandingParents) {
            // initialize whatever wasn't passed to a default value
            datasetId = datasetId || 'default';
            items = items || concealed.items[datasetId];
            matchFound = matchFound || false;
            nestingLevel = nestingLevel || 0;

            for (var i = items.length; --i >= 0;) {
                if (!!items[i].items && !!items[i].items.length) {
                    // matchFound here would mean that a match was found in a descendant
                    matchFound = visible.setActive(state, datasetId, items[i].items, matchFound, nestingLevel + 1, stopExpandingParents);
                    if (matchFound && !stopExpandingParents) {
                        items[i].expanded = true;
                        if (nestingLevel === 0) {
                            stopExpandingParents = true;
                        }
                    }
                } else {
                    if (matchFound) {
                        // matchFound here would mean either a sibling node or some other node was already matched
                        // so we want to skip the comparison to save time
                        items[i].isActive = false;
                    } else {
                        if (!!items[i].stateName && items[i].stateName === state) {
                            // if the item's state is the one being searched for then set the item to active and flip the matched flag
                            items[i].isActive = true;
                            matchFound = true;
                        } else {
                            items[i].isActive = false;
                        }
                    }
                }
            }

            return matchFound;
        },
        // set the conealed items array
        setItems: function(items, datasetId) {
            datasetId = datasetId || 'default';
            concealed.items[datasetId] = items;
        },
        setItemTemplateUrl: function(url) {
            if (!url) {
                if (!concealed.itemTemplateUrl) {
                    concealed.itemTemplateUrl = 'treeViewItem.html';
                }
            } else {
                concealed.itemTemplateUrl = url;
            }
        }
    };

    return visible;
});
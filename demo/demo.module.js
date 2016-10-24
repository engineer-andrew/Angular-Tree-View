angular.module('demo', ['ea.treeview']).controller('mainController', function($scope, eaTreeViewFactory) {
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
});
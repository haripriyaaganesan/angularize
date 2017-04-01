(function(){
'use strict';
String.prototype.split2 = function(separator) {
    return this == "" ? [] : this.split(separator);
}
angular.module('appModule',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
    $scope.lunchItem = '';
    $scope.msg = '';
    $scope.color = '';
    $scope.checkLunchItem = function(){
        var items = $scope.lunchItem.split2(',');
        var len = items.length;
        if ($scope.lunchItem.length === 0) {
            $scope.msg = "Please enter data first";
        }
        if (len > 3) {
            $scope.msg = "Too much!";        
        }
        if (len >= 1 && len <=3) { $scope.msg = "Enjoy!";}       
    };
}

})();
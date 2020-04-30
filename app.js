angular.module('LunchCheck',[])
.controller('LunchCheckController',function($scope,$inject){
  $scope.Check=function(){
    $scope.items= $scope.food.split(',');
    $scope.c=0;
    for(var i=0;i<$scope.items.length;i++)
    {
      $scope.c++;
    }
  if($scope.c<=3)
  $scope.message="Enjoy!";
  else {
    $scope.message="Too Much!";
  }}

});

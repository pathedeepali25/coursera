angular.module('LunchCheck',[])
.controller('LunchCheckController',function($scope){
  $scope.Check=function(){
    $scope.items= $scope.food.split(',');
    $scope.c=0;
    for($scope.i=0;$scope.i<$scope.items.length;$scope.i++)
    {
      $scope.c++;
    }
  if($scope.c<=3)
  $scope.msg="Enjoy!";
  else{
    $scope.msg="Too Much!";
  }

}

});

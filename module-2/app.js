var app = angular.module("ShoppingListCheckOff",[]);
app.controller("ToBuyController",['$scope','ShoppingListCheckOffService',function($scope,ShoppingListCheckOffService){
  $scope.tobuylist=ShoppingListCheckOffService.gettobuyitems();
  $scope.removeItem=function(i){
    ShoppingListCheckOffService.removeItem(i);
  };
}]);
app.service('ShoppingListCheckOffService',function(){
  var tobuylist=[{name:'cookies',quantity:10
  },
  {name:'cookies',quantity:10}];
  var boughtlist=[];
  this.gettobuyitems=function(){
    return tobuylist;
  };
   this.getboughtitems=function(){
    return boughtlist;
  };
  this.removeItem=function(i){
    var r=tobuylist.splice(i, 1);
    boughtlist.splice(1,0,r);
};

});
app.controller("AlreadyBoughtController",function($scope,ShoppingListCheckOffService){
  $scope.boughtlist=ShoppingListCheckOffService.getboughtitems();
});

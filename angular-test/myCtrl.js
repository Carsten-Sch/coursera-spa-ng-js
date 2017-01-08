var app = angular.module('myApp', ['ui.bootstrap']);



app.controller('myCtrl', function($scope) {
  $scope.test="hallo";
  $scope.showInputFields=false;

  $scope.saveSelectedValues = function (mx,my,mr){
    myScope.d3Object.style("fill","green");
    console.log("mS1 "+myScope.myD);
    console.log("mS2 "+mx,my,mr);
    myScope.myD[0]=mx;
    myScope.myD[1]=my;
    myScope.myD[2]=mr;
    console.log("ms3 "+myScope.myD);
    drawChart();
    $scope.showInputFields=false;


  };



});

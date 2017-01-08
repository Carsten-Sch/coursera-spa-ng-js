// Code goes here

var app = angular.module('app', []).

controller('main', function($scope) {
  $scope.values = [];
  $scope.choices = ['Tom', 'Bill', 'Bob', 'Ralph', 'Joe', 'Sue'];

  $scope.updateValues = function() {
    console.log($scope.values);
    $scope.values = $scope.values.filter(function(v) {
      return !!v;
    });
  }

  $scope.$watch('values', $scope.updateValues, true);
});

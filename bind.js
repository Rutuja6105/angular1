// Create AngularJS app
var app = angular.module("studentApp", []);

//  Create controller
app.controller("studentController", function($scope) {
  // Default student data
  $scope.student = {
    name: "John Doe",
    roll: "102",
    course: "Computer Science"
  };
});

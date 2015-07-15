var myApp = angular.module("thisApp", ["firebase"]);

myApp.controller("MyController", ["$scope", "$firebaseArray",
function($scope, $firebaseArray) {
  var ref = new Firebase("https://beerpongsignup.firebaseio.com/");
  $scope.messages = $firebaseArray(ref);

  //ADD MESSAGE METHOD
  $scope.addMessage = function(e) {

    //LISTEN FOR RETURN KEY
    if (e.keyCode === 13 && $scope.msg) {
      //ALLOW CUSTOM OR ANONYMOUS USER NAMES
      var name = $scope.name || "anonymous";
      $scope.messages.$add({ from: name, body: $scope.msg });
      //RESET MESSAGE
      $scope.msg = "";
    }
  }
}
]);
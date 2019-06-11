// log-in controller
angular.module("myApp")
    .controller("logInController", function ($scope, $http) {
        console.log(document.getElementById("userName").value);
        self = this;
        // $http.get('http://localhost:3000/hello').then(function (response) {
        //     $scope.myWelcome = response.data;
        // });
    });
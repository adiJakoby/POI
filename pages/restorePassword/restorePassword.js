// log-in controller
angular.module("myApp")
    .controller("restorePasswordController", function ($scope, $http) {
        $scope.myFunc = function () {
            let userName = (document.getElementById("userName").value);
            let password = (document.getElementById("password").value);
            console.log(userName +" " + password);
            self = this;

            let formdata = {
                userName: userName,
                password: password,
            };

            $http.post('http://localhost:3000/logIn', formdata).then(function (response) {
                if(response.data == "one or more of your inputs are wrong"){
                    window.alert("one or more of your inputs are wrong");
                    document.getElementById("userName").value = "";
                    document.getElementById("password").value = "";
                }
                else{
                    sessionStorage.setItem("token", response.data);
                }
                $scope.myWelcome = response.data;
            });
        }
    });
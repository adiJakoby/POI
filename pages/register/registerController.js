// register controller
angular.module("myApp")
    .controller("registerController", function ($scope, $http) {
        $scope.myFunc = function () {
            let firstName = document.getElementById("firstName").value;
            let lastName = document.getElementById("lastName").value;
            let city = document.getElementById("city").value;
            let userName = document.getElementById("userName").value;
            let password = document.getElementById("password").value;
            let e = document.getElementById("country");
            let country = e.options[e.selectedIndex].value;
            let domain1 = document.getElementById("category1").value;
            let question = document.getElementById("question").value;
            let answer = document.getElementById("answer").value;
            let domain2 = document.getElementById("category2").value;
            let email = document.getElementById("email").value;
            self = this;

            let formdata = {
                firstName: firstName,
                lastName: lastName,
                city: city,
                userName: userName,
                password: password,
                country: country,
                email: email,
                domain1: domain1,
                domain2: domain2,
                question: question,
                answer: answer,
            };

            $http.post('http://localhost:3000/register', formdata).then(function (response) {
                if(response.data == "one or more of your inputs are wrong"){
                    window.alert("one or more of your inputs are wrong");
                    document.getElementById("firstName").value = "";
                    document.getElementById("lastName").value = "";
                    document.getElementById("city").value = "";
                    document.getElementById("userName").value = "";
                    document.getElementById("password").value = "";
                    let e = document.getElementById("country");
                    e.options[e.selectedIndex].value = "";
                    document.getElementById("category1").value = "";
                    document.getElementById("question").value = "";
                    document.getElementById("answer").value = "";
                    document.getElementById("category2").value = "";
                    document.getElementById("email").value = "";
                }
                else{
                    sessionStorage.setItem("token", response.data);
                }
                $scope.myWelcome = response.data;
            });
        }




        // $http.get('http://localhost:3000/hello').then(function (response) {
        //     $scope.myWelcome = response.data;
        // });
    });
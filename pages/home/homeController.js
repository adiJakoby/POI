angular.module('myApp').controller('homeController', function ($scope, $http) {
    self = this;
    let num = 1;
    let formdata = {
        minimalRank: num,
    };

    // $http.get('http://localhost:3000/getRandomPoints/1').then(function (response) {
    //     self.points = response.data;
    //     console.log(self.points);
    // }, function(err){
    //     console.log(err);
    // });

    $http({
        method : "GET",
        url : "http://localhost:3000/getRandomPoints",
        params : {
            minimalRank : num
        }
    }).then( function (res) {
        console.log(res)
    }, function (err) {
        console.log(err)
    })
});
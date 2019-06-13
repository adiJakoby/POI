angular.module('myApp').controller('homeController', function ($scope, $http) {
    $scope.poiShow = false;


    let self = $scope;
    self.points = [];
    let num = 1;
    let formdata = {
        minimalRank: num,
    };
    $http({
        method : "GET",
        url : "http://localhost:3000/getRandomPoints",
        params : {
            minimalRank : num
        }
    }).then( function (res) {
        function fixAnswer(data) {
            data = "[" + data +"]";
            data = data.replace(/\n/gi, ",");

            return data;
        }

        let ans = fixAnswer(res.data);
        self.points = JSON.parse(ans);
        console.log(self.points);
    }, function (err) {
        console.log(err)
    })

    $scope.toShow = function (name) {
        console.log(name);
        //console.log(image);
        $scope.imgSource = 'images/3.JPG';
        $scope.poiShow = true;
    }

    $scope.stopShow = function () {
        $scope.poiShow = false;
    }

});





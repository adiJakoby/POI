angular.module('myApp').controller('homeController', function ($scope, $http) {
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
        // let i = 0;
        // for(i; i < res.data.length; i++){
        //     self.points = {
        //         i: {name: res.data[i]['NAME']},
        //     }
        // }
        console.log(self.points);
    }, function (err) {
        console.log(err)
    })
});
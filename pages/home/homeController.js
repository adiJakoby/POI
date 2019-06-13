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


    // // I open an Alert-type modal.
    // $scope.alertSomething = function() {
    //
    //     // The .open() method returns a promise that will be either
    //     // resolved or rejected when the modal window is closed.
    //     var promise = modals.open(
    //         "alert",
    //         {
    //             message: "I think you are kind of beautiful!"
    //         }
    //     );
    //
    //     promise.then(
    //         function handleResolve( response ) {
    //
    //             console.log( "Alert resolved." );
    //
    //         },
    //         function handleReject( error ) {
    //
    //             console.warn( "Alert rejected!" );
    //
    //         }
    //     );
    //
    // };
    //
    //
    // // I open a Confirm-type modal.
    // $scope.confirmSomething = function() {
    //
    //     // The .open() method returns a promise that will be either
    //     // resolved or rejected when the modal window is closed.
    //     var promise = modals.open(
    //         "confirm",
    //         {
    //             message: "Are you sure you want to taste that?!"
    //         }
    //     );
    //
    //     promise.then(
    //         function handleResolve( response ) {
    //
    //             console.log( "Confirm resolved." );
    //
    //         },
    //         function handleReject( error ) {
    //
    //             console.warn( "Confirm rejected!" );
    //
    //         }
    //     );
    //
    // };
    //
    //
    // // I open a Prompt-type modal.
    // $scope.promptSomething = function() {
    //
    //     // The .open() method returns a promise that will be either
    //     // resolved or rejected when the modal window is closed.
    //     var promise = modals.open(
    //         "prompt",
    //         {
    //             message: "Who rocks the party the rocks the body?",
    //             placeholder: "MC Lyte."
    //         }
    //     );
    //
    //     promise.then(
    //         function handleResolve( response ) {
    //
    //             console.log( "Prompt resolved with [ %s ].", response );
    //
    //         },
    //         function handleReject( error ) {
    //
    //             console.warn( "Prompt rejected!" );
    //
    //         }
    //     );
    //
    // };

});

//
// app.controller(
//     "AlertModalController",
//     function( $scope, modals ) {
//
//         // Setup default values using modal params.
//         $scope.message = ( modals.params().message || "Whoa!" );
//
//
//         // ---
//         // PUBLIC METHODS.
//         // ---
//
//
//         // Wire the modal buttons into modal resolution actions.
//         $scope.close = modals.resolve;
//
//
//         // I jump from the current alert-modal to the confirm-modal.
//         $scope.jumpToConfirm = function() {
//
//             // We could have used the .open() method to jump from one modal
//             // to the next; however, that would have implicitly "rejected" the
//             // current modal. By using .proceedTo(), we open the next window, but
//             // defer the resolution of the current modal until the subsequent
//             // modal is resolved or rejected.
//             modals.proceedTo(
//                 "confirm",
//                 {
//                     message: "I just came from Alert - doesn't that blow your mind?",
//                     confirmButton: "Eh, maybe a little",
//                     denyButton: "Oh please"
//                 }
//             )
//                 .then(
//                     function handleResolve() {
//
//                         console.log( "Piped confirm resolved." );
//
//                     },
//                     function handleReject() {
//
//                         console.warn( "Piped confirm rejected." );
//
//                     }
//                 );
//
//         };
//
//     }
// );
//
// app.controller(
//     "ConfirmModalController",
//     function( $scope, modals ) {
//
//         var params = modals.params();
//
//         // Setup defaults using the modal params.
//         $scope.message = ( params.message || "Are you sure?" );
//         $scope.confirmButton = ( params.confirmButton || "Yes!" );
//         $scope.denyButton = ( params.denyButton || "Oh, hell no!" );
//
//
//         // ---
//         // PUBLIC METHODS.
//         // ---
//
//
//         // Wire the modal buttons into modal resolution actions.
//         $scope.confirm = modals.resolve;
//         $scope.deny = modals.reject;
//
//     }
// );
//



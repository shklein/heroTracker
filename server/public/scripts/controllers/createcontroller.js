myApp.controller('CreateController', ['$scope', '$http', function($scope, $http)

{

$scope.powers = ["invisibility", "flight", "super speed", "heat vision", "super strength", "accelerated healing", "power blast", "animal affinity"];
$scope.currentHero = {};

$scope.submitCurrentHero = function () {
  $scope.currentHero.power_name = $scope.selectedPower;
    var data = $scope.currentHero;

    $http.post('/heroes', data).then(function(response) {
      if(response.status == 201) {
        console.log('Hero saved.');
      } else {
        console.log('Error:', response.data);
      }
    });
    };


}]);

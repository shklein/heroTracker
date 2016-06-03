myApp.controller('ListController', ['$scope', '$http', function($scope, $http)
{

$scope.powers = ["invisibility", "flight", "super speed", "heat vision", "super strength", "accelerated healing", "power blast", "animal affinity"];

$scope.heroes = [];


  getHeroes();


  $scope.deleteHero = function (id) {
    $http.delete('/heroes/' + id)
      .then(function (response) {
        console.log('DELETE /heroes ', id);
        getHeroes();
      });
  };

  function getHeroes() {
    $http.get('/heroes')
      .then(function (response) {
        $scope.heroes = response.data;
        console.log('GET /heroes ', response.data);

      });
  }


}]);

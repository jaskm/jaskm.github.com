pupApp.controller("pupController",
    function ($scope, $window) {

	  $scope.sortPupOrder = "name";

      $scope.toggleShowPupDetails = function (pup) {
        pup.showDetails = !pup.showDetails;
      };
        
      $scope.allPups = PupList;
  }
);

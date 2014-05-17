pupApp.controller("pupController",
    function ($scope, $window) {

	  $scope.sortPupOrder = "name";

      $scope.toggleShowPupDetails = function (pup) {
        pup.showDetails = !pup.showDetails;
      };
        
      $scope.allPups =
				[
						new Pup("Sophie",
								"7",
								"Cocker Spaniel",
								"Female",
								"Small",
								"N/A",
								"Snarky, small, superfluff.",
						),
				];
    }
);


angular.module('cnctApp').controller('chatCtrl', chatCtrl);

function chatCtrl($scope,$routeParams, cnctFactory) {
 	$scope.personId = $routeParams.personId;
	for (var i = 0; i < cnctFactory.cnctPerson.length; i++){
		if($routeParams.personId == cnctFactory.cnctPerson[i].id){
		$scope.name = cnctFactory.cnctPerson[i].name;
		}
	}
}
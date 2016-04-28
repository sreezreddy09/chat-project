angular.module('cnctApp').controller('cnctCtrl', cnctCtrl);

function cnctCtrl($scope, $location, cnctFactory){
	$scope.onPersonClick = function(person){
		$location.path('/chat/' + person.id);
	};
	$scope.personInfo = cnctFactory.cnctPerson;
}


angular.module('cnctApp').controller('layoutCtrl', layoutCtrl);

function layoutCtrl($scope){
	$scope.messageOne = "";
	$scope.messageTwo = "Contacts";
	$scope.showGroups = function(){
		$scope.messageOne = "Groups";
		$scope.messageTwo = "";
	};
	$scope.showContacts = function(){
		$scope.messageTwo = "Contacts";
		$scope.messageOne = "";
	};
}


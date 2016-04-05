
var cnctApp = angular.module('cnctApp',[]);

function contactList(){
	return {
		restrict : 'E',
		replace : true,
		scope : {
			person : '='
		},
		templateUrl : 'cnctDirective.html'
	}
};
cnctApp.directive('contactList', contactList);
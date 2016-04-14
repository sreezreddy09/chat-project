var cnctApp = angular.module('cnctApp', ['ngRoute']);

cnctApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl : "shell.html",
		controller : layoutCtrl
	})
})
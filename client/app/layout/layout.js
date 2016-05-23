var cnctApp = angular.module('cnctApp', ['ngRoute']);

cnctApp.config(function($routeProvider){
	$routeProvider
	.when('/chat/:personId', {
		templateUrl : "app/chats/chat.html",
		controller : chatCtrl
	})
});

cnctApp.service('cnctFactory', function(){
	var _cnctPerson = [
	{
	'id' : 1,
	'name' : 'Alex Nelson',
	'number' : '123-123-3210',
	'imgSrc' : 'assets/img/modules/materialadmin/avatar4.jpg'
	},
	{
	'id' : 2,
	'name' : 'Ann Laurens',
	'number' : '123-123-3450',
	'imgSrc' : 'assets/img/modules/materialadmin/avatar9.jpg'
	},
	{
	"id" : 3,
	'name' : 'Jessica Cruise',
	'number' : '123-123-4556',
	'imgSrc' : 'assets/img/modules/materialadmin/avatar2.jpg'
	},
	{
	'id' :4,
	'name' : 'Jim Peters',
	'number' : '123-123-3467',
	'imgSrc' : 'assets/img/modules/materialadmin/avatar8.jpg'
	},
	{
	'id' : 5,
	'name' : 'Mabel Logan',
	'number' : '234-432-4545',
	'imgSrc' : 'assets/img/modules/materialadmin/avatar5.jpg'
	},
	{
	'id' : 6,
	'name' : 'Mary Peterson',
	'number' : '223-334-4455',
	'imgSrc' : 'assets/img/modules/materialadmin/avatar11.jpg'
	},
	{
	'id' :7,
	'name' : 'Mike Alba',
	'number' : '221-112-3343',
	'imgSrc' : 'assets/img/modules/materialadmin/avatar3.jpg'
	},
	{
	'id' : 8,
	'name' : 'Nathan Peterson',
	'number' : '221-665-5654',
	'imgSrc' : 'assets/img/modules/materialadmin/avatar6.jpg'
	},
	{
	'id' : 9,
	'name' : 'Philip Ericson',
	'number' : '223-554-5654',
	'imgSrc' : 'assets/img/modules/materialadmin/avatar7.jpg'
	},
	{
	'id' : 10,
	'name' : 'Samuel Parsons',
	'number' : '334-665-3454',
	'imgSrc' : 'assets/img/modules/materialadmin/avatar10.jpg'
	}
];
	return {
		cnctPerson : _cnctPerson
	};
});
angular.module('cnctApp').controller('cnctCtrl', cnctCtrl);

function cnctCtrl($scope){
	$scope.personInfo = [
	{
	'name' : 'Alex Nelson',
	'number' : '123-123-3210',
	'imgSrc' : 'http://www.codecovers.eu/assets/img/modules/materialadmin/avatar4.jpg?1422538625'
	},
	{
	'name' : 'Ann Laurens',
	'number' : '123-123-3450',
	'imgSrc' : 'http://www.codecovers.eu/assets/img/modules/materialadmin/avatar9.jpg?1422538626'
	},
	{
	'name' : 'Jessica Cruise',
	'number' : '123-123-4556',
	'imgSrc' : 'http://www.codecovers.eu/assets/img/modules/materialadmin/avatar2.jpg?1422538624'
	},
	{
	'name' : 'Jim Peters',
	'number' : '123-123-3467',
	'imgSrc' : 'http://www.codecovers.eu/assets/img/modules/materialadmin/avatar8.jpg?1422538626'
	},
	{
	'name' : 'Mabel Logan',
	'number' : '234-432-4545',
	'imgSrc' : 'http://www.codecovers.eu/assets/img/modules/materialadmin/avatar5.jpg?1422538625'
	},
	{
	'name' : 'Mary Peterson',
	'number' : '223-334-4455',
	'imgSrc' : 'http://www.codecovers.eu/assets/img/modules/materialadmin/avatar11.jpg?1422538623'
	},
	{
	'name' : 'Mike Alba',
	'number' : '221-112-3343',
	'imgSrc' : 'http://www.codecovers.eu/assets/img/modules/materialadmin/avatar3.jpg?1422538624'
	},
	{
	'name' : 'Nathan Peterson',
	'number' : '221-665-5654',
	'imgSrc' : 'http://www.codecovers.eu/assets/img/modules/materialadmin/avatar6.jpg?1422538626'
	},
	{
	'name' : 'Philip Ericson',
	'number' : '223-554-5654',
	'imgSrc' : 'http://www.codecovers.eu/assets/img/modules/materialadmin/avatar7.jpg?1422538626'
	},
	{
	'name' : 'Samuel Parsons',
	'number' : '334-665-3454',
	'imgSrc' : 'http://www.codecovers.eu/assets/img/modules/materialadmin/avatar10.jpg?1422538623'
	}
];
}
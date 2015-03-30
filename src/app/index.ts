/// <reference path="../../.tmp/typings/tsd.d.ts" />

/// <reference path="main/main.controller.ts" />
/// <reference path="app/app.controller.ts" />
/// <reference path="../components/navbar/navbar.controller.ts" />
/// <reference path="../components/leftmenu/leftmenu.controller.ts" />


module ccsTs {
	'use strict';

	angular.module('ccsTs', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial'])
		.controller('AppCtrl', AppCtrl)
		.controller('MainCtrl', MainCtrl)
		.controller('NavbarCtrl', NavbarCtrl)
		.controller('LeftMenuCtrl', LeftMenuCtrl)

	.config(function ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
		$stateProvider
			.state('index', {
				url: '/',
				views: {
					'mainView' : { templateUrl: 'app/main/main.html', controller: 'MainCtrl as vm'},
					'leftView' : { templateUrl: 'components/leftmenu/leftmenu.html', controller: 'LeftMenuCtrl as vm'}
				}
			});

		$urlRouterProvider.otherwise('/');
	});
}

module ccsTs {
	'use strict';

	import MaterialServices = angular.material;

	interface IAppScope extends ng.IScope {
		toggleSidenav(menuId: string): void
	}

	export class AppCtrl {
		private _mdSidenav: MaterialServices.MDSidenavService;

		/* @ngInject */
		constructor ($scope: IAppScope, $mdSidenav: MaterialServices.MDSidenavService) {
			this._mdSidenav = $mdSidenav;
		}

		toggleSidenav(menuId: string) {
			this._mdSidenav(menuId).toggle();
		}
	}

}

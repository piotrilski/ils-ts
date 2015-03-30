module ccsTs {
	'use strict';

	class Catalog {
		id: number;
		name: string;

		constructor(id:number, name:string) {
			this.id = id;
			this.name = name;
		}
	}

	interface ILeftMenuScope extends ng.IScope {
		selectedItem: Catalog
		getMatches(text: string): Array<Catalog>
	}

	export class LeftMenuCtrl {
		private _catalogs: Array<Catalog>;
		public selectedItem: Catalog;

		/* @ngInject */
		constructor ($scope: ILeftMenuScope) {
			this.selectedItem = null;
			this._catalogs = [
				new Catalog(0,'Kraft'),
				new Catalog(1,'KraftWerk'),
				new Catalog(2,'Ils_tst'),
				new Catalog(3,'Ils_tst1'),
				new Catalog(4,'Ils_tst2'),
				new Catalog(5,'Ils_tst3'),
				new Catalog(6,'Ils_tst4'),
				new Catalog(7,'Ils_tst5')
			];
		}

		getMatches(text: string) {			
			var ret:Array<Catalog> = _.filter(this._catalogs, function(item) {
				return item.name.toUpperCase().indexOf(text.toUpperCase()) > -1;
			});
			
			return ret;
		}
	}

}

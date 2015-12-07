import template from "../../templates/entity/entity-property-list.html";

import EntityPropertyListController from "../../controllers/entity/entity-property-list";

export default class EntityPropertyListDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
		this.replace = true;
		
		this.controller = EntityPropertyListController;
		this.controllerAs = "entityPropertyListCtrl";
		
		this.scope = {
			selectedEntity: "="
		};
		this.bindToController = true;
	}
	
	link(scope, element, attrs) {
		scope.$watch("entityPropertyListCtrl.selectedEntity", entity => {
			if (entity) {
				scope.entityPropertyListCtrl.getPropertiesByEntity(entity);
			}
		});
	}
}
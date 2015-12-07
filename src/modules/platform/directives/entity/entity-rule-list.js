import template from "../../templates/entity/entity-rule-list.html";

import EntityRuleListController from "../../controllers/entity/entity-rule-list";

export default class EntityPropertyListDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
		this.replace = true;
		
		this.controller = EntityRuleListController;
		this.controllerAs = "entityRuleListCtrl";
		
		this.scope = {
			selectedEntity: "="
		};
		this.bindToController = true;
	}
	
	link(scope, element, attrs) {
		scope.$watch("entityRuleListCtrl.selectedEntity", entity => {
			if (entity) {
				scope.entityRuleListCtrl.getRulesByEntity(entity);
			}
		});
	}
}
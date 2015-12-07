import template from "../../templates/entity/entity-list.html";

import EntityListController from "../../controllers/entity/entity-list";

export default class EntityListDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
		this.replace = true;
		this.controller = EntityListController;
		this.controllerAs = "entityListCtrl";
		
		this.scope = {
			selectedEntity: "="
		};
		this.bindToController = true;
	}
}
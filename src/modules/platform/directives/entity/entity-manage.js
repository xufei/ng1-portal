import template from "../../templates/entity/entity-manage.html";

import EntityManageController from "../../controllers/entity/entity-manage";

export default class EntityManageDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
		this.replace = true;
		
		this.controller = EntityManageController;
		this.controllerAs = "entityManageCtrl";
	}
}
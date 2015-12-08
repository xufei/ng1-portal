import template from "../../templates/flow/flow.html";

import FlowController from "../../controllers/flow/flow";

export default class EntityListDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
		this.replace = true;
		this.controller = FlowController;
		this.controllerAs = "flowCtrl";
	}
}
import template from "../../templates/flow/state-machine.html";

import StateMachineController from "../../controllers/flow/state-machine";

export default class StateMachineDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
		this.replace = true;
		this.controller = StateMachineController;
		this.controllerAs = "smCtrl";
	}
	
	link(scope, element, attrs) {
		
	}
}
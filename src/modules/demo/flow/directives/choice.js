import template from "../templates/choice.html";

import ChoiceController from "../controllers/choice";

export default class ChoiceDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
		this.replace = true;
		this.controller = ChoiceController;
		this.controllerAs = "choiceCtrl";
	}
}
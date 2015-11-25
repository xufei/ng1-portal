import template from "../templates/alert-dropdown.html";

import AlertListController from "../controllers/alert-list";

export default class AlertDropdownDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
		this.replace = true;
		this.controller = AlertListController;
		this.controllerAs = "alertListCtrl";
	}
}
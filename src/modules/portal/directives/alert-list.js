import template from "../templates/alert-list.html";

import AlertListController from "../controllers/alert-list";

export default class AlertListDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
		this.replace = true;
		this.controller = AlertListController;
		this.controllerAs = "alertListCtrl";
	}
}
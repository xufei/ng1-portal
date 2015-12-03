import template from "../templates/dashboard.html";

import DashboardController from "../controllers/dashboard";

//import "../css/dashboard.css";

export default class DashboardDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
		this.controller = DashboardController;
		this.controllerAs = "dashboardCtrl";
	}
}
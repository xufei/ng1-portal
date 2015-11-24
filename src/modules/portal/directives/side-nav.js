import template from "../templates/side-nav.html";

import SideNavController from "../controllers/side-nav";

import "../css/side-nav.css";

export default class SideNavDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
		this.controller = SideNavController;
		this.controllerAs = "sideNavCtrl";
	}
}
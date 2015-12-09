import template from "../templates/euclid.html";

import EuclidController from "../controllers/euclid";

export default class EuclidDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
		this.replace = true;
		this.controller = EuclidController;
		this.controllerAs = "euclidCtrl";
	}
}
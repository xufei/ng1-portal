import template from "../templates/alert-list.html";

export default class AlertListDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
		this.replace = true;

		this.scope = {
		};
	}
}